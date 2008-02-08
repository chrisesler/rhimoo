var controllerItem = {
	path : "/test",
	controller : {
		ProcessHandler: function(request, response){
			
			var context = { name:'World', items:['<AAA>', 'B&B', '"CCC"'] };
			//var template = new rhimoo.template.parser("test.html");
			
			//print(template.toSource());
		
			this.headers = {
				contentType: 'text/html',
			    status: 200
			};

			this.body =  rhimoo.template.parser.render("test.html",context);
		},
	
	}
	
};
