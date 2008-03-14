var controllerItem = {
	path : "myapp",
	controller : {
		Implements: rhimoo.controller.object,
		main: function(request, response){
			
			//request.session.obj.putValue('test','woot a test');
			var context = {};
			context.articles = ArticleModel.findAll();
			
			response.headers = {contentType: 'text/html',
			                      status: 200};

			response.body = this.parser.render("synergy.tpl",context);
		}
		
		
	}
	
};
