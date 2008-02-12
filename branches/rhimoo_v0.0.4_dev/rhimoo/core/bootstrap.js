/*
	Based in part on QooxDoo bootstrap
	http://www.qooxdoo.org
*/
var bootstrap = new Class({

	Implements: [Options,Chain],
	
	initialize: function(options){
		print("++ Bootstrap Init ");
		this.setOptions(options);
		
		$extend(this,rhimoo);

		rhimoo = this;

		//setup bootstrap core
		this.defineClass("rhimoo.app",{
			statics :{
				LOADSTART : new Date,

				time : function() {
					return new Date().getTime();
				},

				since : function() {
					return this.time() - this.LOADSTART;
				}
				
			}
		});
		print("+");
		print("+ namespace rhimoo initialized");
		print("+");
	},
	
	// quick way to fetch object from registry
	getObject : function(name){
		return this.registry.Class[name];
	},

	createNamespace : function(name, object){
		var splits = name.split(".");
		var parent = this;
		var part = splits[0];

		for (var i=0, len=splits.length-1; i<len; i++, part=splits[i]){
			if(i == 0 ) continue;
			if (!parent[part]) {
				parent = parent[part] = {};
			} else {
				parent = parent[part];
			}
		}

		// get general parent name
		var PNsplits = name.split(".");
		PNsplits.pop();
		var parentName = PNsplits.join(".");

		// add some utility values to object
		var helpers = {
			identifier : {
				'classname' : name,
				'basename' : part,
				'parentname' : parentName
			}
		}
		
		// extend object with utilities
		if($type(object.prototype) == "class"){
			object.implement(helpers);
		}else{
			$extend(object,helpers);
		}
		
		// bridge to make qooxdoo-like
		// object assignment work with mootools
		var tempObject = {};
		tempObject[part] = object;

		// store object
		$extend(parent,tempObject);

		// return last part name (e.g. classname)
		return part;

	},
	
	defineClass : function(name, config){

		var parent = this;

		if (!config) {
			config = { statics : {} };
		};
		
		if (!config.statics) {
			config.statics = {};
		};

		/* check if it requires anything */
		if(config.requires){
			this.loadRequired(config.requires);
		}

		// create the namespace
		this.createNamespace(name, config.statics);

		// deferring is to run things after namespace is 
		// created. kind of like deferred initialization.
		if (config.defer) {
			config.defer(config.statics);
		}
		
		// assign to class registry
		parent.registry.Class[name] = config.statics;

	},
	
	loadRequired: function(reqs){
		var parent = this;
		
		if($type(reqs) == 'string'){
			var PNsplits = reqs.split("."); // split
			PNsplits.shift(); 
			
			var item = PNsplits.join("/");
			item = parent.repository+item+'.js';
			if(!$type(parent.registry.Class[reqs])){
				//new Asset.javascript(item,{'id':reqs});
				print("++ "+reqs);
				load(root+item);
			}
			return;
		}
		$each(reqs,function(i){
			var PNsplits = i.split("."); // split
			 
			// drop first one - which should be your repo dir
			// NOTE: should probably check if in same
			// top level namespace to avoid including 
			// non-existant files
			PNsplits.shift(); 
			
			var item = PNsplits.join("/");
			item = parent.repository+item+'.js';
			if(!$type(parent.registry.Class[i])){
				print("++ "+i);
				//new Asset.javascript(item,{'id':i});
				load(root+item);
			}
			
		});
	},
	
	setDir: function(alias,dir){ rhimoo.dirs[alias] = dir; },
	setDirs: function(obj){
		rhimoo.dirs = $merge(rhimoo.dirs,obj);
	},
	getDir: function(alias){ return rhimoo.dirs[alias]; }
	
	
});