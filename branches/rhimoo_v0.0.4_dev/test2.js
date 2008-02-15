importPackage(java.lang,
			java.io,
			java.util);

load("rhimoo/javaPackages.js");

importClass(Packages.MooServer,
			Packages.Shell,
			Packages.RequestHandler);
			
load("scripts/mootools-server-1.2-1331.js");

var fred = new Class({ 
	__noSuchMethod__: function f(name, args)
{ print(name,args); } 
});

fred.foobar(3,4);