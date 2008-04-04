rhimoo.defineClass("rhimoo.routing.debug",
{
	
  statics : new Class({
		main: function(request,response){
			response.headers = {contentType: 'text/html',
			                      status: 200};

								var html = '<html>' +
								               '<head>' +
								                 '<title>DEBUG</title>' +
								                 '<style>h1,h2{font-family:sans-serif;color:#66C}</style>' +
								               '</head>' +
								               '<body>' +
								                 '<h1>DEBUGGING</h1>' +

								                 '<h2>Request OBJ details</h2>' +
								                 '<ul>';

			  for (var p in request.obj) {
				html +=        '<li>' + p + ': ' + request.obj[p] + '</li>';
			  }

			  html +=        '</ul>' +

			                 '<h2>Request HEADERS details</h2>' +
			                 '<ul>';
			for (var p in request.headers) {
				html +=        '<li>' + p + ': ' + request.headers[p] + '</li>';
			  }
			
			html +=        '</ul>' +

			                 '<h2>Request PARAMETERS details</h2>' +
			                 '<ul>';

			  for (var p in request.parameters) {
			    html +=        '<li>' + p + ': ' + request.parameters[p] + '</li>';
			  }
			 html +=        '</ul>' +

			                 '<h2>Request COOKIES details</h2>' +
			                 '<ul>';
			for (var p in request.cookies) {
				html +=        '<li>' + p + ': ' + request.cookies[p] + '</li>';
			  }
				html +=        '</ul>' +

				                 '<h2>SESSION details</h2>' +
				                 '<ul>';
			  //html += '<li>SESSION ID: '+request.session.obj.getId()+'</li>';
			html += '<li>SESSION ID: '+request.session.getId()+'</li>';
			  html +=        '</ul>' +

			               '</body>' +
			             '</html>';

			  response.body = html;
		}
	}),
	defer: function(statics){
		rhimoo.routing.debug = new rhimoo.routing.debug();
		print("----- loaded debug handler");
	}
});