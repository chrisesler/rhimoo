var controllerItem = {
	path : "index",
	controller : {
		main: function(request, response){
		
			html = readFile("views/index.html");
			html.toString();

			this.headers = {
				contentType: 'text/html',
			    status: 200
			};

			this.body =  html;
		}
	}
	
};
