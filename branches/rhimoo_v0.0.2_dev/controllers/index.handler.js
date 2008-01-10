var controllerItem = {
	path : "/",
	controller : {
	ProcessHandler: function(request, response){
		//var wassup = readFile("static/test.html");
		
		//var context = {}; // a hash of data for the view

		//context.articles = ArticleModel.findAll();

	  //response.body = html; 
		//var html = this.viewIndex(context);

		//window.location = "../views/index.html";
		//document.load("../views/index.html");
		//var html = document.innerHTML;
		
		html = readFile("views/index.html");
		html.toString();
		
		//document.innerHTML = html;
		
        //response.setContentType("text/html");
        //response.getWriter().println(html);

		this.headers = {
			contentType: 'text/html',
		    status: 200
		};
		
		this.body =  html;
	},
	viewIndex: function(context) {
	  var html = '<html><head><title>Article Index</title><style>dt{font-weight:bold;}</style></head><body>';

	  html += '<h1>Synergy Blog 2</h1>'

	html += '<strong>'+this.request.getMethod()+'</strong>'

	  html += '<dl>';
	  for (var i=0; i<context.articles.length; i++) {
	    var article = context.articles[i];
	    html += '<dt>' + article.title + '</dt><dd>' + article.body + '</dd>';
	  }
	  html += '</dl>';

	  html += '</body></html>';
	  return html;
	}
}
	
};
