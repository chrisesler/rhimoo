// alias somethings to java objects since
// we are in Rhino context
File = java.io.File

// set root directory
rootDir = new File(".");
rootDir = new File(rootDir.getCanonicalPath());
root = rootDir.getCanonicalPath()+"/";

// load up mootools
load(root+"scripts/mootools-server-1.2-1331.js");

// load up core and bootstrap
load(root+"rhimoo/core/core.js");
load(root+"rhimoo/core/bootstrap.js");

// initialize rhimoo to setup namespace
rhimoo.appinit();

// setup some directories
rhimoo.setDirs({
	'root':root,
	'app':root+"app/",
	'controllers':root+"app/controllers/",
	'helpers':root+"app/helpers/",
	'models':root+"app/models/",
	'views':root+"app/views/"
});

// load db models - we'll make this more elegant
// once database modeling gets more sophisticated
// (think activerecord)
load(rhimoo.getDir("models")+"model.js");

// load vendors
rhimoo.util.loadVendors();

// load router
rhimoo.loadRequired("rhimoo.routing.manager");

// load template engine
rhimoo.loadRequired("rhimoo.template.engine");

// run deferred actions
rhimoo.registry.deferred.each(function(item){
	item();
});


