rhimoo.defineClass("rhimoo.template.parser",
{


  statics : {},
  	defer : function(statics)
	  {
	    print("----- loaded template parser namespace");
	 	print("----- deferring attachment to parser engine");
	    rhimoo.registry.deferred.push(function(){
			print("+ creating default template parser - attaching to engine object");
			rhimoo.template.parser = new Tenjin.Engine();
		});
	  }
});