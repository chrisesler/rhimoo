function app(request, response) {
  
  response.headers = {contentType: 'text/html',
                      status: 200};

					var html = '<html>' +
					               '<head>' +
					                 '<title>A Harmony Apple!</title>' +
					                 '<style>h1,h2{font-family:sans-serif;color:#66C}</style>' +
					               '</head>' +
					               '<body>' +
					                 '<h1>Congratulations! You are on your way! RHIMOO!!!</h1>' +

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
  html += '<li>SESSION ID: '+request.session.obj.getId()+'</li>';
  html +=        '</ul>' +

               '</body>' +
             '</html>';
  
  response.body = html;  
}