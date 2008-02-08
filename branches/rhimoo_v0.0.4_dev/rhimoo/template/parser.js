rhimoo.defineClass("rhimoo.template.parser",
{
	requires: "rhimoo.template.contexts",

  statics : {},
  	defer : function(statics)
	  {
	    print("----- loaded template parser namespace");
	 	print("----- deferring attachment to parser engine");
	    rhimoo.registry.deferred.push(function(){
			print("+ attaching Tenjin to rhimoo.template.parser");
			rhimoo.template.parser = new Tenjin.Engine();
		});
	  }
});