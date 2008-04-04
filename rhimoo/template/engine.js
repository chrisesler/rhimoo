rhimoo.defineClass("rhimoo.template.engine",
{
	requires: ["rhimoo.template.contexts",
				"rhimoo.template.parser"],
  statics : {},
  	defer : function(statics)
	  {
	    print("----- loaded template engine namespace");
	 	print("----- deferring attachment to parser engine");
	    rhimoo.registry.deferred.push(function(){
			print("+ attaching Tenjin to rhimoo.template.engine");
			rhimoo.template.engine = Tenjin.Engine;
		});
	  }
});