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
		sessionHandler: null,
		
		servlets: [],

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
	
			sessHandler = new SessionHandler();
			
			// servlet
			print("servlet: ON");
			var cx = new Context(this.contextHandler,"/",Context.SESSIONS);
			
			var holder = new ServletHolder(new MooServlet());
			cx.addServlet(holder, "/*");

			
			this.contexts.push(cx);
			
			// EXPERIMENT
			resources = new ResourceHandler();
			resources.setResourceBase(this.assets.file);
			
			resourceContext = new Context(this.contextHandler,this.assets.path,Context.SESSIONS);
			
			resourceContext.setHandler(resources);
			
			this.contexts.push(resourceContext);
			
			
			
		},

		Start: function(){
			print("==============================================");
			print("  STARTING SERVER ....... hold on ");
			print("==============================================");
			//this.handlerCollection = new HandlerCollection();
	        //this.handlerCollection.setHandlers(this.toJavaArray(Handler,[this.contextHandler,new DefaultHandler()]));

	        this.server.setStopAtShutdown(true);
			this.server.start();
			
			
			this.server.join();
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