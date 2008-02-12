importPackage(java.lang,
			java.io,
			java.util);

load("rhimoo/javaPackages.js");

importClass(Packages.MooServer,
			Packages.Shell,
			Packages.RequestHandler);
			
load("scripts/mootools-server-1.2-1331.js");

rootDir = new File(".");
rootDir = new File(rootDir.getCanonicalPath());
root = rootDir.getCanonicalPath()+"/";

var properties = new java.util.Properties();
var propFile = new FileInputStream(new File(root+"config/server.properties"));
properties.load(propFile);

System.out.println(properties.getProperty("server.name"));