var controllerItem = {
	path : "admin",
	controller : {
		Implements: rhimoo.controller.object,
		main: function(request, response){
			
			/*if(!request.session.obj.getValue('test')){
				//response.setStatus(response.SC_UNAUTHORIZED); 
				  //response.setHeader("WWW-Authenticate",
				     //"BASIC realm=\"protected-area\"");
				
					response.headers = {realm: "protected-area",
					                    status: 401};
				  
				
			}else{*/
				
			print("USER: "+request.session.remoteUser);
			
			var context = {};
			context.sessionTest = request.session.obj.getValue('test');
			context.articles = ArticleModel.findAll();
			
			response.headers = {realm: "protected-area",
								contentType: 'text/html',
			                      status: 200};
			
			if(request.session.remoteUser == null){
				response.headers.authenticate = 'true';
			}

			response.body = this.parser.render("synergy.tpl",context);
			//}
		}
		
		
	}
	
};
