importPackage(java.io);

rootDir = new File(".");
rootDir = new File(rootDir.getCanonicalPath());
root = rootDir.getCanonicalPath()+"/";

print(root);

// include needed java packages
load(root+"rhimoo/javaPackages.js");

// load up mootools
load(root+"rhimoo/mootools/mootools-server-1.2-1331.js");

// load up core and bootstrap
load(root+"rhimoo/core/core.js");
load(root+"rhimoo/core/bootstrap.js");

// initialize rhimoo to setup namespace
rhimoo.init();

// initialize server
server = new rhimoo.server.init({
	useAJP: true,
	ports: {
		server: 3000,
		ajp: 8080
	},
	assets: {
		path: "/assets",
		file: "./assets"
	}
	
});

// load controllers
server.loadControllers();

// start it up
server.jetty.Start();