var controllerItem = {
	path : "index",
	controller : {
		Implements: rhimoo.controller.object,
		main: function(request, response){
			
			var context = {};
			context.articles = ArticleModel.findAll();
			
			response.headers = {contentType: 'text/html',
			                      status: 200};

			response.body = this.parser.render("synergy.tpl",context);
		}
		
		
	}
	
};
