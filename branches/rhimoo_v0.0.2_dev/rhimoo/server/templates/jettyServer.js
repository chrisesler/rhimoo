rhimoo.defineClass("rhimoo.server.templates.jettyServer",
{
  statics : {

		server: null,
		connectors: [],
		
		channelConnector: null,
		ajpConnector: null, 

		contexts: [],

		contextHandler: null,
		handlerCollection: null,

		Setup: function(){
			this.server = new Server();

	        this.channelConnector = new SelectChannelConnector();
	        this.channelConnector.setPort(this.ports.server);
			this.connectors.push(this.channelConnector);

			if(this.useAJP){
				this.ajpConnector = new Ajp13SocketConnector();
				this.ajpConnector.setPort(this.ports.ajp);
				this.connectors.push(this.ajpConnector);
			}

	        this.server.setConnectors(this.toJavaArray(Connector,this.connectors));
	
			this.contextHandler = new ContextHandlerCollection();
	        //this.contextHandler.setHandlers(this.toJavaArray(Handler,this.contexts));
			this.server.setHandler(this.contextHandler);

	        /* THIS WORKS FOR SURE 
			context0 = this.createContext();
	        context0.setContextPath(this.assets.path);
	        handler0 = new ResourceHandler();
			handler0.setResourceBase(this.assets.file);
	        context0.setHandler(handler0);*/
	
			// EXPERIMENT
			resources = new ResourceHandler();
			resources.setResourceBase(this.assets.file);
			
			resourceContext = new Context(this.contextHandler,this.assets.path,Context.SESSIONS);
			
			resourceContext.setHandler(resources);
			
			this.contexts.push(resourceContext);
			
		},

		Start: function(){
			print("STARTING SERVER..........hold on");
			//this.contextHandler = new ContextHandlerCollection();
	        //this.contextHandler.setHandlers(this.toJavaArray(Handler,this.contexts));

	        this.handlerCollection = new HandlerCollection();
	        this.handlerCollection.setHandlers(this.toJavaArray(Handler,[this.contextHandler,new DefaultHandler()]));

	        //this.server.setHandler(this.handlerCollection);

			this.server.setStopAtShutdown(true);
			this.server.start();
			this.server.join();
		},

		/*createContext: function(path,context){
			if(!context){
				var context = this.contextHandler;
			}
			var count = this.contexts.length;
			//var cx = this.contexts.push(new ContextHandler());
			//this.contexts.push(new ContextHandler());
			this.contexts.push(new Context(context,path,Context.SESSIONS));
			return this.contexts[count];
		},
		
		createHandlerContext: function(path,context){
			if(!context){
				context = this.contextHandler;
			}
			var count = this.contexts.length;
			//var cx = this.contexts.push(new ContextHandler());
			this.contexts.push(new Context(context,path,Context.SESSIONS));
			return this.contexts[count];
		},*/

		addHandler: function(path,handler){
			print("++++ adding handler");
			//var cx = this.createContext(path);
			var cx = new Context(this.contextHandler,path,Context.SESSIONS);
		
			//var sessionhandler = new SessionHandler();
			  //sessionhandler.setHandler(handler);
			//cx.setContextPath(path);
			cx.setHandler(handler);
			this.contexts.push(cx);
		},
		
		/*createServletContext: function(path,context){
			if(!context){
				context = this.contextHandler;
			}
			var count = this.contexts.length;
			//var cx = this.contexts.push(new ContextHandler());
			this.contexts.push(new Context(context,path,Context.SESSIONS));
			return this.contexts[count];
		},*/
		
		addServlet: function(path,contextPath,servlet){
			print("++++ adding Servlet");
			//var cx = this.createServletContext(path);
			var cx = new Context(this.contextHandler,path,Context.SESSIONS);
			cx.setClassLoader(servlet.classloader);
			//cx.addServlet(new ServletHolder(servlet),contextPath);
			

			
			var handler = new ServletHandler();
			  handler.setServlets(this.toJavaArray(ServletHolder, [servlet.holder]));
			  handler.setServletMappings(this.toJavaArray(ServletMapping, [this.makeServletMapping(path, servlet)]));
			//handler.addServlet(this.toJavaArray(ServletHolder, [servlet.holder]));
			//handler.addServletMapping(this.makeServletMapping(path, servlet));


				//var sessionhandler = new SessionHandler();
				  //sessionhandler.setHandler(handler);


			  //cx.setHandler(sessionhandler);
			cx.setHandler(handler);

			  //this.server.addHandler(cx);
			
			this.contexts.push(cx);
		
	

			//cx.setHandler(handler);
		},
		
		makeServletMapping: function(path, servlet) {
		  var mapping = new ServletMapping();
		  mapping.setPathSpec(path);
		  mapping.setServletName(servlet.name);
		  return mapping;
		},

		toJavaArray: function(type, objects) {
			var jarray = java.lang.reflect.Array.newInstance(type, objects.length);
			for(var i = 0; i < objects.length; ++i) {
				jarray[i] = objects[i];
			}
			return jarray;
		}
			
	},
	defer: function(statics){
		print("----- loaded jettyServer Template");
	}
});