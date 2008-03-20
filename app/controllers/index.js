var controllerItem = {
	path : "myapp",
	controller : {
		Implements: rhimoo.controller.object,
		layout: rhimoo.getDir('layouts')+"main.tpl",
		main: function(request, response){
			
			//request.session.obj.putValue('test','woot a test');
			var context = {};
			context.articles = ArticleModel.findAll();
			//context.layout = this.layout;
			
			response.headers = {contentType: 'text/html',
			                      status: 200};

			response.body = this.parser.render("synergy.tpl",context,this.layout);
		}
		
		
	}
	
};
