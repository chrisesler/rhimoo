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
print('init');
// load some required items
rhimoo.loadRequired("rhimoo.server.init");

// run deferred actions
rhimoo.registry.deferred.each(function(item){
	item();
});

// initialize server
server = new rhimoo.server.init({
	useAJP: true,
	ports: {
		server: 3000,
		ajp: 8010
	}
	
});

// start it up
server.jetty.Start();

// now, it should send stuff to routing.js
