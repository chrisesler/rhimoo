importPackage(java.io);

rootDir = new File(".");
rootDir = new File(rootDir.getCanonicalPath());
root = rootDir.getCanonicalPath()+"/";

// include needed java packages
load(root+"rhimoo/javaPackages.js");

// load up mootools
load(root+"scripts/mootools-server-1.2-1331.js");

// load up core and bootstrap
load(root+"rhimoo/core/core.js");
load(root+"rhimoo/core/bootstrap.js");

// initialize rhimoo to setup namespace
rhimoo.init();

// load some required items
rhimoo.loadRequired("rhimoo.config");

print(rhimoo.config.registry.toSource());