// Copyright (C) 2006 Chris Double.
// 
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
// 
// 1. Redistributions of source code must retain the above copyright notice,
//    this list of conditions and the following disclaimer.
// 
// 2. Redistributions in binary form must reproduce the above copyright notice,
//    this list of conditions and the following disclaimer in the documentation
//    and/or other materials provided with the distribution.
// 
// THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES,
// INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
// FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
// DEVELOPERS AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
// OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
// WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
// OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//

/* Load the JavascriptServlet Class. This wraps HttpServlet in a manner
   that allows it to be subclassed in Javascript */
importClass(Packages.JavascriptServlet);

/* The rest of the routines are what is required to start up a Jetty 6
   server from within Javascript. */
importClass(Packages.org.mortbay.jetty.Connector);
importClass(Packages.org.mortbay.jetty.Server);
importClass(Packages.org.mortbay.jetty.Handler);
importClass(Packages.org.mortbay.jetty.handler.ContextHandler);
importClass(Packages.org.mortbay.jetty.handler.HandlerCollection);
importClass(Packages.org.mortbay.jetty.handler.HandlerList);
importClass(Packages.org.mortbay.jetty.handler.ResourceHandler);
importClass(Packages.org.mortbay.jetty.nio.SelectChannelConnector);
importClass(Packages.org.mortbay.jetty.servlet.ServletHolder);
importClass(Packages.org.mortbay.jetty.servlet.ServletHandler);
importClass(Packages.org.mortbay.jetty.servlet.ServletMapping);

/* Given a Javascript object containing method definitions, return an object that contains
   the JavaAdapter, servlet definition, classloader, etc */
function makeServlet(methods) {
  var s = {};
  s["methods"] = methods;
  s["adapter"] = new JavaAdapter(JavascriptServlet, methods);
  s["classloader"] = s["adapter"].getClass().getClassLoader();
  s["name"] = s["adapter"].getClass().getName();
  s["holder"] = new JavaAdapter(ServletHolder, {
    newInstance: function () {
      return new JavaAdapter(JavascriptServlet, methods);
    }
  });
  s["holder"].setName(s["name"]);
  s["holder"].setClassName(s["name"]);
  return s;
}

/* Given a port, return a SelectChannelConnector for that port */
function makeSelectChannelConnector(port) {
  var connector = new SelectChannelConnector();
  connector.setPort(port);
  return connector;
}
  
/* Given a Javascript array of objects return a Java array of objects of the given type */
function toJArray(type, objects) {
  var jarray = java.lang.reflect.Array.newInstance(type, objects.length);
  for(var i = 0; i < objects.length; ++i) {
    jarray[i] = objects[i];
  }
  return jarray;
}


/* Return a context which maps a javascript servlet object to a given server path */
function makeContext(path, servlet) {
  var context = new ContextHandler();
  context.setContextPath(path);
  context.setClassLoader(servlet.classloader);
  return context;
}

/* Return a mapping between a server path and the servlet */
function makeMapping(path, servlet) {
  var mapping = new ServletMapping();
  mapping.setPathSpec(path);
  mapping.setServletName(servlet.name);
  return mapping;
}

/* Start a Jetty 6 server on the given port. Return the server instance */

var hl;

function startServer(port) { 
  var server = new Server(port);
  var publicDocs = new ResourceHandler();
  publicDocs.setResourceBase(readFile("jettyStatic.txt"));
  //server.setConnectors(toJArray(Connector, [ makeSelectChannelConnector(port) ]));
  hl = new HandlerList();
  hl.addHandler(publicDocs);
  //var main = addServlet(server, "/", HelloWorldServlet);
  //hl.addHandler(main);
  server.setHandler(hl);
  server.start();
  return server;
}

function addServlet(server, path, servlet) {
  var handler = new ServletHandler()
  handler.setServlets(toJArray(ServletHolder, [servlet.holder]));
  handler.setServletMappings(toJArray(ServletMapping, [makeMapping("/", servlet)]));

  var context = makeContext(path, servlet);
  context.setHandler(handler);

  server.addHandler(context);
}

/* A simple HelloWorldServlet. It provides a definition for the
   abstract ProcessGet method in JavascriptServlet */
HelloWorldServlet = makeServlet({ 
  ProcessGet: function (request, response) {

	response.headers = {contentType: 'text/html',
	                      status: 200};


	  var html = '<html>' +
	               '<head>' +
	                 '<title>A Harmony JavaScript App</title>' +
	                 '<style>h1,h2{font-family:sans-serif;color:#66C}</style>' +
	               '</head>' +
	               '<body>' +
	                 '<h1>Congratulations! You are in Harmony.</h1>' +

	                 '<h2>Request URL details</h2>' +
	                 '<ul>';

	  for (var p in request.url) {
	    html +=        '<li>' + p + ': ' + request.url[p] + '</li>';
	  }

	  html +=        '</ul>' +

					 this.getClassName() +

	                 '<h2>Request Parameters</h2>' +
	                 '<ul>';

	  for (var p in request.parameters) {
	    html +=        '<li>' + p + ': ' + request.parameters[p] + '</li>';
	  }

	  html +=        '</ul>' +

	               '</body>' +
	             '</html>';

	  response.body = html;
    //resp.getOutputStream().print(text);
    //resp.flushBuffer();
  }
});

GoodbyeWorldServlet = makeServlet({ 
  ProcessGet: function (req, resp) {   
    var text = "Goodbye World!";
    resp.setContentType("text/plain");
    resp.setContentLength(text.length);
    resp.getOutputStream().print(text);
    resp.flushBuffer();
  }
});

