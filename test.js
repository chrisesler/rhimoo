importPackage(java.lang,
			java.io);

load("rhimoo/javaPackages.js");

importClass(Packages.MooServer,
			Packages.Shell,
			Packages.RequestHandler);
			
load("scripts/mootools-server-1.2-1331.js");

rootDir = new File(".");
rootDir = new File(rootDir.getCanonicalPath());
root = rootDir.getCanonicalPath()+"/";

new MooServer().newInstance();