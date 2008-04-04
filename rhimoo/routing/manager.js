rhimoo.defineClass("rhimoo.routing.manager",
{
	requires: [
				'rhimoo.controller.manager',
				'rhimoo.routing.FourOhFour',
				'rhimoo.routing.debug'
				],
	
  statics : new Class({
		initialize: function(){	},
		router: function(request,response){
			//var controller = rhimoo.routing.manager.getController(request.url.path);
			var url = new String(request.obj.pathInfo);
			var method = new String(request.obj.method);
			print(method);
			var controller = rhimoo.routing.manager.getController(url);
			
			if(rhimoo.controller.manager.controllers[controller]){
				print("YAY! found it!");
				rhimoo.controller.manager.controllers[controller].router(request,response);
			}else{
				print('OOOPS! 404');
				rhimoo.routing.FourOhFour.main(request,response);
			}
		},
		getController: function(url){
			//print("URL: "+url);
			//print("TYPE: "+$type(url));
			if(url == "/"){
				return "index";
			}else{
				//var tmp = substr(url,1,url.length);
				var tmp = substr(url,1,strlen(url));
				//print('len '+strlen(url));
				//tmp = tmp.split("/");
				tmp = split("/",tmp);
				//print("TEMP: "+tmp[0]);
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