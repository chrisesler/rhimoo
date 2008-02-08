// This is just a JavaScript shell that has some host objects. It would be
// a good idea that host objects useful to a server-side framework be added.
// These may include File and Database objects. It is amazing how easy it is
// to create your own shell and host objects with Rhino since the entire Java
// world can be stitched into the shell.
//
// This file knows nothing about a web server, web app framework or web app.

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.BufferedReader;

import org.mozilla.javascript.*;

public class Shell extends ScriptableObject {
    
    private Context cx;

    public Shell() {
        cx = Context.enter();
        cx.initStandardObjects(this);

        // host objects --------------

        // Give easy access to the global object by making a global property named "global".
        // This is the same as how "window" is used in browser scripting.
        defineProperty("global", this, ScriptableObject.DONTENUM);
        
        // global functions
        String[] names = {"load"};
        defineFunctionProperties(names, Shell.class, ScriptableObject.DONTENUM);
    }

    public String getClassName() {
        return "global";
    }
    
    public Context getContext() {
        return cx;
    }
    
    /**
     * Load and execute a set of JavaScript source files.
     *
     * This method is defined as a JavaScript function.
     */
    public static void load(Context cx, Scriptable thisObj,
                            Object[] args, Function funObj)
    {
      Shell shell = (Shell)getTopLevelScope(thisObj);
      for (int i = 0; i < args.length; i++) {
         shell.processFile(Context.toString(args[i]));
      }
    }
    
    /**
     * Load a JavaScript file.
     *
     * @param filename the JavaScript file to load
     */
    public void loadFile(String filename) {
        Object[] args = {filename};
        Shell.load(cx, this, args, null);
    }    
    
    /**
     * A convinence method to call a global JavaScript function.
     *
     * @param methodName the global JavaScript function to be called
     * @param args the arguments for the JavaScript function
     */
    public Object callGlobalFunction(String methodName, Object[] args) {
        return ScriptableObject.callMethod(this, methodName, args);
    }
    
    /**
     * Evaluate JavaScript source file.
     *
     * @param filename the name of the file to evaluate
     */
    private void processFile(String filename) {
                    
        FileReader in = null;
        try {
            in = new FileReader(filename);
        }
        catch (FileNotFoundException ex) {
            Context.reportError("Couldn't open file \"" + filename + "\".");
            return;
        }

        try {            
            // Here we evalute the entire contents of the file as a script.
            cx.evaluateReader(this, in, filename, 1, null);
        }
        catch (WrappedException we) {
            System.err.println(we.getWrappedException().toString());
            we.printStackTrace();
        }
        catch (EvaluatorException ee) {
            System.err.println("js: " + ee.getMessage());
        }
        catch (JavaScriptException jse) {
            System.err.println("js: " + jse.getMessage());
        }
        catch (IOException ioe) {
            System.err.println(ioe.toString());
        }
        finally {
            try {
                in.close();
            }
            catch (IOException ioe) {
                System.err.println(ioe.toString());
            }
        }
        
    }
}
