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

/* Given a Javascript array of objects return a Java array of objects of the given type */
function toJArray(type, objects) {
  var jarray = java.lang.reflect.Array.newInstance(type, objects.length);
  for(var i = 0; i < objects.length; ++i) {
    jarray[i] = objects[i];
  }
  return jarray;
}

var BootstrapTemplate = {
	StartServer: function(){
		server = new Server();
        connector=new SelectChannelConnector();
        connector.setPort(3000);
        server.setConnectors(toJArray(Connector,[connector]));
        
        context = new ContextHandler();
        context.setContextPath("/");
        context.setResourceBase("./static");
        //context.setClassLoader(Thread.currentThread().getContextClassLoader());
        server.setHandler(context);
        

        context.setHandler(MooHandler);
        
        server.start();
        server.join();
	}	
};

var handlerTemplate = {
	ProcessHandler: function(request, response){
		var wassup = readFile("static/test.html");
        response.setContentType("text/html");
        response.getWriter().println("<h1>Hello OneContext - "+wassup+"</h1>");
	}
};
Bootstrap = new JavaAdapter(MooServerTemplate,BootstrapTemplate);
MooHandler = new JavaAdapter(MooHandlerTemplate,handlerTemplate);
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