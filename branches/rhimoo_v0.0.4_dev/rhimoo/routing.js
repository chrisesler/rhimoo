function router(req,res){
//importPackage(java.io);

rootDir = new java.io.File(".");
rootDir = new java.io.File(rootDir.getCanonicalPath());
root = rootDir.getCanonicalPath()+"/";

print = println;

// include needed java packages
//load(root+"rhimoo/javaPackages.js");

// load up mootools
load(root+"scripts/mootools-server-1.2-1331.js");

// load up core and bootstrap
load(root+"rhimoo/core/core.js");
load(root+"rhimoo/core/bootstrap.js");

// initialize rhimoo to setup namespace
rhimoo.init();

// setup some directories
rhimoo.setDirs({
	'root':root,
	'app':root+"app/",
	'controllers':root+"app/controllers/",
	'helpers':root+"app/helpers/",
	'models':root+"app/models/",
	'views':root+"app/views/"
});

// load vendors
rhimoo.util.loadVendors();

// load router
rhimoo.loadRequired("rhimoo.routing.manager");

// run deferred actions
rhimoo.registry.deferred.each(function(item){
	item();
});


	rhimoo.router.manager.router(req,res);
}
