// macro holder
rhimoo.defineClass("rhimoo.template.macros",
{
  statics : {},
  	defer : function(statics)
	  {
	    print("----- loaded template macros");
	  }
});

// utility to add macros
rhimoo.defineClass("rhimoo.addMacro",
{
  statics : function(obj){
		for (var key in obj) {
		  if(!$defined(rhimoo.template.macros[key])){
				$extend(rhimoo.template.macros,obj);
				// make it global
				eval(key+' = rhimoo.template.macros.'+key+';'); 
		   }else{
				throw Error("Macro rhimoo.template.macros."+key+" already exists. Sorry.");
			}
		}
		
	},
	defer : function(statics)
	  {
	    print("----- loaded addMacro helper");
	  }
});



//basic macros
rhimoo.addMacro({
	escape : function(s) {
		//print(s);
		//print($type(s));
	    //return new String(s);
		s = new java.lang.String(s);
		return s.toString();
	}
});

rhimoo.addMacro({
	each: function(seq, callback) {
	    for (var i = 0, n = seq.length; i != n; i++)
	      callback(seq[i], i);
	  }
});

rhimoo.addMacro({
	include: function(file,parent) {
		var template = new rhimoo.template.parser(file);
		var returned = template.render();
		//arguments.callee.caller.__buffer__.push(returned);
		print(parent.callee.toString());
		//return returned;
	  }
});
