rhimoo.defineClass("rhimoo.routing.manager",
{
	requires: [
				'rhimoo.controller.manager',
				'rhimoo.routing.FourOhFour'
				],
	
  statics : new Class({
		initialize: function(){	},
		router: function(request,response){
			var controller = rhimoo.routing.manager.getController(request.url.path);
			
			if(rhimoo.controller.manager.controllers[controller]){
				rhimoo.controller.manager.controllers[controller].main(request,response);
			}else{
				rhimoo.routing.FourOhFour.main(request,response);
			}
		},
		getController: function(url){
			print("URL: "+url);
			if(url == "/"){
				return "index";
			}else{
				var tmp = substr(url,1,url.length);
				tmp = tmp.split("/");
				return tmp[0];
			}
		}
	}),
	defer: function(statics){
		rhimoo.routing.manager = new rhimoo.routing.manager();
		
		router = rhimoo.routing.manager.router;
		print("----- loaded routing manager");
	}
});