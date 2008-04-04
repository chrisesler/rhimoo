importPackage(java.lang,
			java.io,
			java.util);

load("rhimoo/javaPackages.js");

importClass(Packages.MooServer,
			Packages.Shell,
			Packages.RequestHandler);
			
load("scripts/mootools-server-1.2-1331.js");

var fredMetas = new Class({
	get: function(name, args)
	{ print(name,args); },

	set: function(thisObj,prop,value) {
	  if (prop == 'salary') {
	    throw new Error('Warning: Salary is a read-only property');
	  }

		print("*** SAVED "+prop+": "+value);
		thisObj[prop]=value;
	}
});

var fred = new Class({
	temp: null,
	salary: 10,
	initialize: function(){
		
		this.__metaobject__ = new fredMetas();
		
	},
	__metaobject__: {}
});



var Ed = new fred();

Ed.temp = "WOOT THERE IT IS!";
Ed.salary = 25;