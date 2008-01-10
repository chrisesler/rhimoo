/**** THIS WORKS *****/

importClass(Packages.MooServerTemplate);
importClass(Packages.MooHandlerTemplate);

importPackage(java.io);
importPackage(Packages.javax.servlet);
importPackage(Packages.javax.servlet.http);

importPackage(Packages.org.mortbay.jetty);
importPackage(Packages.org.mortbay.jetty.handler);
importPackage(Packages.org.mortbay.jetty.servlet);

importClass(Packages.org.mortbay.jetty.nio.SelectChannelConnector);
importClass(Packages.org.mortbay.jetty.servlet.ServletHolder);
importClass(Packages.org.mortbay.jetty.bio.SocketConnector);
importClass(Packages.org.mortbay.jetty.ajp.Ajp13SocketConnector);

load('models/model.js');

/* Given a Javascript array of objects return a Java array of objects of the given type */
function toJArray(type, objects) {
  var jarray = java.lang.reflect.Array.newInstance(type, objects.length);
  for(var i = 0; i < objects.length; ++i) {
    jarray[i] = objects[i];
  }
  return jarray;
}

var BootstrapTemplate = {
	server: null,
	connector: null, 
	
	contexts: [],
	
	contextHandler: null,
	handlerCollection: null,
	
	SetupServer: function(){
		this.server = new Server();

        this.connector=new SelectChannelConnector();
        this.connector.setPort(3000);

		ajpConnector = new Ajp13SocketConnector();

		ajpConnector.setPort(8010);

        this.server.setConnectors(toJArray(Connector,[this.connector,ajpConnector]));
        
        context0 = this.createContext();
        context0.setContextPath("/assets");
        handler0 = new ResourceHandler();
		handler0.setResourceBase("./static");
        context0.setHandler(handler0);

	},
	
	StartServer: function(){
		
		this.contextHandler = new ContextHandlerCollection();
        this.contextHandler.setHandlers(toJArray(Handler,this.contexts));
        
        this.handlerCollection = new HandlerCollection();
        this.handlerCollection.setHandlers(toJArray(Handler,[this.contextHandler,new DefaultHandler()]));
        
        this.server.setHandler(this.handlerCollection);

        this.server.start();
        this.server.join();
	},
	
	createContext: function(){
		var count = this.contexts.length;
		var cx = this.contexts.push(new ContextHandler());
		return this.contexts[count];
	},
	
	addHandler: function(path,handler){
		var cx = this.createContext();
		cx.setContextPath(path);
		cx.setHandler(handler);
	}	
};

var handlerTemplate = {
	ProcessHandler: function(request, response){
		var wassup = readFile("static/test.html");
		
		var context = {}; // a hash of data for the view

		context.articles = ArticleModel.findAll();

	  //response.body = html; 
		var html = this.viewIndex(context);
		
        response.setContentType("text/html");
        response.getWriter().println(html);

		//response.headers = {contentType: 'text/html',
		//                     status: 200};
		
		//response.body = html; 
	},
	viewIndex: function(context) {
	  var html = '<html><head><title>Article Index</title><style>dt{font-weight:bold;}</style></head><body>';

	  html += '<h1>Synergy Blog 2</h1>'

	  html += '<dl>';
	  for (var i=0; i<context.articles.length; i++) {
	    var article = context.articles[i];
	    html += '<dt>' + article.title + '</dt><dd>' + article.body + '</dd>';
	  }
	  html += '</dl>';

	  html += '</body></html>';
	  return html;
	},
	
};
Bootstrap = new JavaAdapter(MooServerTemplate,BootstrapTemplate);
MooHandler = new JavaAdapter(MooHandlerTemplate,handlerTemplate);
Bootstrap.SetupServer();
Bootstrap.addHandler("/",MooHandler);
Bootstrap.StartServer();

//GroovyServlet.Start();
/* server = new Server();

var connector = new SelectChannelConnector();
connector.setPort(3000);
	
server.addConnector(new Connector(connector));
 

handlerCollection = new HandlerCollection();

server.setHandler(handlerCollection);*/
   
 /*contexts = new ContextHandlerCollection();
 handlerCollection.addHandler(contexts);

 resources = new ResourceHandler();
 resources.setResourceBase("./static");
contexts.addHandler(resources);
    
 root = new Context(contexts,"/",Context.SESSIONS);
 root.addServlet(new ServletHolder(GroovyServlet), "/*");
    
 stats = new StatisticsHandler();
 contexts.addHandler(stats);*/

/*
	
	resourceHandler = new ResourceHandler();
	resourceHandler.setResourceBase("./static");
	
	handlerCollection.addHandler(new ServletHolder(GroovyServlet));
	
	handlerCollection.addHandler(this.resourceHandler);


 
    
 server.start();
 server.join();*/