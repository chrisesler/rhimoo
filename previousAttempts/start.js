importPackage(java.io);

rootDir = new File(".");
rootDir = new File(rootDir.getCanonicalPath());
root = rootDir.getCanonicalPath()+"/";

// include needed java packages
load("rhimoo/javaPackages.js");

// load up mootools
load("rhimoo/mootools/mootools-server-1.2-1331.js");

// load up core and bootstrap
load("rhimoo/core/core.js");
load("rhimoo/core/bootstrap.js");

load("rhimoo/serverinit.js");