// load java dependencies
load("scripts/packages.js");

// load env
/*load("scripts/env.js");
window.location = 'scripts/construct.html';
var document = window.document;
var navigator = window.navigator;
*/
window = {};
navigator = {
	platform: 'mooserver'
};
document = window.document = {};

// load mootools
load("scripts/mootools-server.js");


mooserver = new Class({
	port: null,
	server: null,
	
	handlerCollection: null,
	resourceHandler: null,
	contextHandler: null,
		
	options: {
		staticDir: "./static"
	},
	
	initialize: function(port,options){
		if(options){
			this.setOptions(options);
		}
		
		if(!port){
			var port = 3000;
		}
		
		this.port = port;
		
		this.server = new Server();
		
		var connector = this.makeSelectChannelConnector();
		
		this.server.addConnector(new Connector(connector));
		
		this.handlerCollection = new HandlerCollection();
		
		this.resourceHandler = new ResourceHandler();
		this.resourceHandler.setResourceBase(this.options.staticDir);
		
		this.handlerCollection.addHandler(this.resourceHandler);
		
		/*this.contextHandler = new ContextHandlerCollection();
		this.server.setHandler(this.contextHandler);
		
		this.resourceHandler = new ResourceHandler();
		this.resourceHandler.setResourceBase(this.options.staticDir);
		
		this.contextHandler.addHandler(this.resourceHandler);*/
			
	},
	
	start: function(){
		this.server.setHandler(this.handlerCollection);
		this.server.setStopAtShutdown(true);
		this.server.start();
		this.server.join();
	},
	
	
	/*******************************
		NOT SURE YET ABOUT THESE
	*******************************/
	
	makeServlet: function(methods) {
	  var s = {};
	  s["methods"] = methods;
	  s["adapter"] = new JavaAdapter(Packages.JavascriptServlet, methods);
	  s["classloader"] = s["adapter"].getClass().getClassLoader();
	  s["name"] = s["adapter"].getClass().getName();
	  s["holder"] = new JavaAdapter(Packages.org.mortbay.jetty.servlet.ServletHolder, {
	    newInstance: function () {
	      return new JavaAdapter(Packages.JavascriptServlet, methods);
	    }
	  });
	  s["holder"].setName(s["name"]);
	  s["holder"].setClassName(s["name"]);
	  return s;
	},

	/* Given a port, return a SelectChannelConnector for that port */
	makeSelectChannelConnector: function(port) {
	  if(!port) { port = this.port; }
	  var connector = new SelectChannelConnector();
	  connector.setPort(port);
	  return connector;
	},

	/* Given a Javascript array of objects return a Java array of objects of the given type */
	toJArray: function(type, objects) {
	  var jarray = java.lang.reflect.Array.newInstance(type, objects.length);
	  for(var i = 0; i < objects.length; ++i) {
	    jarray[i] = objects[i];
	  }
	  return jarray;
	},


	/* Return a context which maps a javascript servlet object to a given server path */
	makeContext: function(path, servlet) {
	  var context = new ContextHandler();
	  context.setContextPath(path);
	  context.setClassLoader(servlet.classloader);
	  return context;
	},

	/* Return a mapping between a server path and the servlet */
	makeMapping: function(path, servlet) {
	  var mapping = new ServletMapping();
	  mapping.setPathSpec(path);
	  mapping.setServletName(servlet.name);
	  return mapping;
	},


	
	addServlet: function(path, servlet) {
	  var handler = new ServletHandler()
	  handler.setServlets(this.toJArray(ServletHolder, [servlet.holder]));
	  handler.setServletMappings(this.toJArray(ServletMapping, [this.makeMapping(path, servlet)]));

	  var context = this.makeContext(path, servlet);
	  context.setHandler(handler);

	  //this.server.addHandler(context);
	 this.handlerCollection.addHandler(context);
		//this.contextHandler.addHandler(context);
	}
	
	/*addServlet: function(path,servlet){
		var contxt = new Context(this.contextHandler,path,Context.SESSIONS);
		var holder = new ServletHolder(new servlet.holder,path);
		contxt.addServlet(holder);
		//handler.addServlet(servlet);
	}*/
	
});
mooserver.implement(new Options);

ms = new mooserver(3000);

HelloWorldServlet = ms.makeServlet({ 
  ProcessGet: function (request, response) {
	System.out.println('wassup');
  }
});

/*HelloWorldServlet = ms.makeServlet({ 
	ProcessGet: function (request, response) {

			System.out.println('wassup');
			response.headers = {contentType: 'text/html',
			                      status: 200};


			  var html = '<html>' +
			               '<head>' +
			                 '<title>A Harmony JavaScript App</title>' +
			                 '<style>h1,h2{font-family:sans-serif;color:#66C}</style>' +
			               '</head>' +
			               '<body>' +
			                 '<h1>Congratulations! You are in Harmony.</h1>' +
							'</ul>' +

			               '</body>' +
			             '</html>';

			  response.body = html;
		    //resp.getOutputStream().print(text);
		    //resp.flushBuffer();
		  }
	
});*/

ms.addServlet("/hello",HelloWorldServlet);

ms.start();