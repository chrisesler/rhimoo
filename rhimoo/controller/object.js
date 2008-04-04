rhimoo.defineClass("rhimoo.controller.object",
{

  statics : new Class({
	    Implements: [Chain, Events, Options],
		parser: {},
		layout: 'default.tpl',
		section: null,
		parameters: {},
		request:{},
		response: {},
		headers: {},
		initialize: function(){
			this.parser = new Tenjin.Engine();
			this.layout = rhimoo.getDir('layouts')+this.layout+'.tpl';
		},
		router: function(request,response){
			print('AT THE ROUTER');
			//rhimoo.routing.debug.main(request,response);
			this.main(request,response);
		}
	}),
	defer: function(statics){

		print("----- loaded controller object abstract");
	}
});