/*
RHIMOO LAUNCHER
Inspired by Helma Launcher and java class found here
http://forum.java.sun.com/thread.jspa?threadID=722227&messageID=4164724
*/

import java.io.*;
import java.lang.reflect.Method;
import java.net.*;
import java.util.*;
import java.util.jar.*;

public class Launcher {

	public static void main(String[] args) throws FileNotFoundException, IOException {
		File rootDir = new File(".");
		System.setProperty("rhimoo.home", rootDir.getCanonicalPath());

		String root = rootDir.getCanonicalPath();

		String[] dirNames = { "rhino","jetty","apache","sun","rhimoo","extra" };

		ArrayList jarlist = new ArrayList();

		for(String item : dirNames){
			String sectionName = root+"/libs/"+item;
			//System.out.println("\n---------------------");
			//System.out.println("\tDIR:\t" + sectionName); 

			File currentDir = new File(sectionName);

			jarlist.add(new URL("file:" + currentDir.getAbsolutePath()));

			String[] strs = currentDir.list();
			for (int i = 0; i < strs.length; i++) {
				String fileName = sectionName + "/" + strs[i];

				// START JAR IF
				if(strs[i].endsWith(".jar") && strs[i].toString() != "Launcher.jar"){
					//System.out.println("\t--FILE:\t" + fileName); 
					jarlist.add(new URL("file:" + new File(fileName).getAbsolutePath()));
				} 
				// END JAR IF

			}

		}

		URL[] urls = new URL[jarlist.size()];

		jarlist.toArray(urls);

		ClassLoader loader;

		loader = new URLClassLoader(urls);

		// set the new class loader as context class loader
		Thread.currentThread().setContextClassLoader(loader);
		try {
			Class clazz  = loader.loadClass("org.mozilla.javascript.tools.shell.Main");
			String[] rhimoo = {"rhimoo/server.js"};
			Class[] cargs = new Class[]{rhimoo.getClass()};
			Method main  = clazz.getMethod("main", cargs);
			Object[] nargs  = new Object[]{rhimoo};

			// and invoke the static main(String, String[]) method
			main.invoke(null,nargs);
		} catch (Exception x) {
			// unable to get Helma installation dir from launcher jar
			System.err.println("Unable to load Rhimoo java files: ");
			x.printStackTrace();
			System.exit(2);
		}

	}

	private static URLClassLoader getURLClassLoader(URL jarURL) {
		return new URLClassLoader(new URL[]{jarURL});
	}
}
