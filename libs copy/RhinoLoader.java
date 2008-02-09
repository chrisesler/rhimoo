/*
 *  Copyright 2004 Hannes Wallnoefer <hannes@helma.at>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */


import org.mozilla.javascript.*;
import org.mozilla.javascript.optimizer.ClassCompiler;

import java.io.*;
import java.util.ArrayList;

/**
 * A ClassLoader that creates Java classes from JavaScript files.
 *
 * @author Hannes Wallnoefer <hannes@helma.at>
 */
public class RhinoLoader extends ClassLoader {

    File scriptDir;
    ScriptableObject scope;

    /**
     * Create a RhinoLoader which loads scripts from directory <code>dir</code>.
     * @param dir the script base directory
     */
    public RhinoLoader(File dir) {
        // FIXME: use our own classloader as parent
        super(RhinoLoader.class.getClassLoader());
        scriptDir = dir.isAbsolute() ? dir : dir.getAbsoluteFile();
        // create a new global scope level
        Context cx = Context.enter();
        scope = new ImporterTopLevel(cx);
        Context.exit();
    }

    /**
     * Find and load a java class implemented in JavaScript.
     * @param name the class name
     * @return the class
     * @throws ClassNotFoundException
     * @throws JavaScriptException
     */
    protected Class findClass(String name) throws ClassNotFoundException {
        Context cx = Context.enter();
        try {
            return compileClass(cx, name);
        } catch (IOException iox) {
            throw new ClassNotFoundException(iox.getMessage(), iox);
        } finally {
            Context.exit();
        }
    }

    /**
     * Convert a class name to a script file name
     * @param className the name of the class we're looking for
     * @return the script file name
     */
    protected File resolveClassName(String className) {
        String scriptName = className.replace('.', File.separatorChar);
        return new File(scriptDir, scriptName + ".js");
    }

    /**
     *
     * @param cx the rhino context
     * @param className the class name
     * @return the compiled class
     * @throws IOException an i/o related error occurred
     * @throws ClassNotFoundException class couldn't be found
     */
    private Class compileClass(Context cx, String className)
            throws IOException, ClassNotFoundException {
        Class superclass = null;
        Class[] interfaces = null;

        File file = resolveClassName(className);
        Scriptable target = evaluate(cx, file);

        // first get the base class
        Object ext = ScriptableObject.getProperty(target, "__extends__");
        if (ext instanceof String) {
            superclass = Class.forName((String) ext);
        }

        // then add the implemented interfaces
        ArrayList list = new ArrayList();
        Object impl = ScriptableObject.getProperty(target, "__implements__");
        if (impl instanceof NativeArray) {
            NativeArray array = (NativeArray) impl;
            for (int i=0; i<array.getLength(); i++) {
                Object obj = array.get(i, array);
                if (obj instanceof String) {
                    list.add(Class.forName((String) obj));
                }
            }
        } else if (impl instanceof String) {
            list.add(Class.forName((String) impl));
        }

        if (!list.isEmpty()) {
            interfaces = new Class[list.size()];
            interfaces = (Class[]) list.toArray(interfaces);
        }
        return compileClass(cx, file, className, superclass, interfaces);
    }

    /**
     *
     * @param cx the rhino context
     * @param file the file to read fom
     * @param className the class name
     * @param superclass the super class
     * @param interfaces the implemented interfaces
     * @return the compiled class
     * @throws IOException an i/o related error occured
     */
    private Class compileClass(Context cx, File file, String className,
                                 Class superclass, Class[] interfaces)
            throws IOException {
        CompilerEnvirons compEnv = new CompilerEnvirons();
        compEnv.initFromContext(cx);
        ClassCompiler compiler = new ClassCompiler(compEnv);
        if (superclass != null) {
            compiler.setTargetExtends(superclass);
        }
        if (interfaces != null) {
            compiler.setTargetImplements(interfaces);
        }

        int size = (int) file.length();
        byte[] buf = new byte[size];
        int read = 0;
        FileInputStream in = new FileInputStream(file);
        try {
            while (read < size) {
                int r = in.read(buf, read, size - read);
                if (r == -1)
                    break;
                read += r;
            }
        } finally {
            try {
               in.close();
            } catch (IOException ignore) {
                // ignore
            }
        }

        Object[] classes = compiler.compileToClassFiles(new String(buf), file.getName(),
                                                        1, className);
        GeneratedClassLoader loader = cx.createClassLoader(cx.getApplicationClassLoader());
        Class clazz = null;
        for (int i = 0; i < classes.length; i += 2) {
            Class c = loader.defineClass((String) classes[i], (byte[]) classes[i+1]);
            loader.linkClass(c);
            if (i == 0) {
                clazz = c;
            }
        }
        return clazz;
    }

    /**
     * Evaluate the script on a new Scriptable object.
     *
     * @param cx the current Context
     * @param file the file to evaluate
     * @return the scriptable object on which the script was evaluated
     * @throws JavaScriptException if an error occurred evaluating the
     *                             prototype script code
     * @throws IOException if an error occurred reading the script file
     */
    private Scriptable evaluate(Context cx, File file)
            throws JavaScriptException, IOException {
        if (!file.exists()) {
            throw new FileNotFoundException("File " + file + " not found or not readable");
        }

        Scriptable target = cx.newObject(scope);

        Reader reader = new InputStreamReader(new FileInputStream(file));
        cx.evaluateReader(target, reader, file.getName(), 1, null);
        return target;
    }

}