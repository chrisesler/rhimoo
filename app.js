function app(request, response) {
  
  response.headers = {contentType: 'text/html',
                      status: 200};

load("testing.js");
html = header();

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