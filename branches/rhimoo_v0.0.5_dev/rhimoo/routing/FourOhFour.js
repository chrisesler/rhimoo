rhimoo.defineClass("rhimoo.routing.FourOhFour",
{
	
  statics : new Class({
		main: function(request,response){
			response.headers = {contentType: 'text/html',
			                      status: 404};

								var html = '<html>' +
								               '<head>' +
								                 '<title>404</title>' +
								                 '<style>h1,h2{font-family:sans-serif;color:#66C}</style>' +
								               '</head>' +
								               '<body>' +
								                 '<h1>404 Error</h1>' +

								                 '<h2>Request URL details</h2>' +
								                 '<ul>';

			  for (var p in request.url) {
			    html +=        '<li>' + p + ': ' + request.url[p] + '</li>';
			  }

			  html +=        '</ul>' +

			                 '<h2>Request Parameters</h2>' +
			                 '<ul>';

			  for (var p in request.parameters) {
			    html +=        '<li>' + p + ': ' + request.parameters[p] + '</li>';
			  }
			  //html += '<li>SESSION ID: '+request.session.obj.getId()+'</li>';
			html += '<li>SESSION ID: '+request.getSession(true).getId()+'</li>';
			  html +=        '</ul>' +

			               '</body>' +
			             '</html>';

			  response.body = html;
		}
	}),
	defer: function(statics){
		rhimoo.routing.FourOhFour = new rhimoo.routing.FourOhFour();
		print("----- loaded 404 handler");
	}
});