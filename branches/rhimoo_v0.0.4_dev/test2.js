importPackage(java.lang,
			java.io,
			java.util);

load("rhimoo/javaPackages.js");

importClass(Packages.MooServer,
			Packages.Shell,
			Packages.RequestHandler);
			
load("scripts/mootools-server-1.2-1331.js");

fred = new Class({ 
	
});

fr = new fred();
mop = {};
mop.get = function(thisObj,propName) {
   if ((typeof thisObj[propName]) == 'function') {
      return thisObj[propName]();
   }
   else return thisObj[propName];
};

fr.__metaobject__ = mop;

fr.foobar(3,4);