rhimoo.defineClass("rhimoo.managers.routing",
{
	requires: ['rhimoo.controller.manager'],
	
  statics : new Class({
		initialize: function(){	},
		router: function(req,resp){
			var rtURL = this.parseUrl();
			print("MADE IT TO THE ROUTER!!");
		},
		parseURL: function(url){
			
		}
	}),
	defer: function(statics){
		rhimoo.routing.manager = new rhimoo.routing.manager();
		print("----- loaded routing manager");
	}
});