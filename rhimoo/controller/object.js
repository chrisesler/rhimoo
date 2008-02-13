rhimoo.defineClass("rhimoo.controller.object",
{

  statics : new Class({
		parser: {},
		initialize: function(){
			this.parser = new Tenjin.Engine();
		}
	}),
	defer: function(statics){

		print("----- loaded controller object abstract");
	}
});