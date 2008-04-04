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
		requestLogHandler: null,
		
		sh: null,
		
		servlets: [],

		Setup: function(){
			this.server = new Server();

			// CONNECTORS
	        this.channelConnector = new SelectChannelConnector();
	        this.channelConnector.setPort(this.ports.server);
			this.connectors.push(this.channelConnector);
			
			this.server.setConnectors(this.toJavaArray(Connector,this.connectors));
			
			// if using mod_jk
			if(this.useAJP){
				this.ajpConnector = new Ajp13SocketConnector();
				this.ajpConnector.setPort(this.ports.ajp);
				this.connectors.push(this.ajpConnector);
			}
			
			this.server.setConnectors(this.toJavaArray(Connector,this.connectors));
			
			//TEST//
				constraint = new Constraint();
				constraint.setName(new BasicAuthenticator());;
				constraint.setRoles(["user","admin","moderator"]);
				constraint.setAuthenticate(true);

				cm = new ConstraintMapping();
				cm.setConstraint(constraint);
				cm.setPathSpec("/admin/*");

				this.sh = new SecurityHandler();
				this.sh.setUserRealm(new HashUserRealm("MyRealm",root+"config/realm.properties"));
				this.sh.setConstraintMappings(this.toJavaArray(ConstraintMapping,[cm]));
				
				/*userRealm = new HashUserRealm();
				userRealm.setName("protected-area");
				userRealm.setConfig(root+"config/realm.properties");
				this.server.setUserRealms(this.toJavaArray(UserRealm,[userRealm]));*/

			// threadpool
			var threadPool = new BoundedThreadPool();
	        threadPool.setMaxThreads(100);
	        this.server.setThreadPool(threadPool);

			// handler collection
	        this.handlerCollection = new HandlerCollection();
	
			// context handler
			this.contextHandler = new ContextHandlerCollection();
			//this.server.setHandler(this.contextHandler);
	
			// session handler
			this.sessionHandler = new SessionHandler();
			
			// request log handler
			this.requestLogHandler = new RequestLogHandler();
			var requestLog = new NCSARequestLog(root+"/log/jetty-yyyy_mm_dd.log");
	        	requestLog.setRetainDays(90);
		        requestLog.setAppend(true);
		        requestLog.setExtended(true);
		        requestLog.setLogTimeZone("GMT");
		        this.requestLogHandler.setRequestLog(requestLog);
				
			// RESOURCES
			resources = new ResourceHandler();
				resources.setResourceBase(this.assets.file);
			
			resourceContext = new Context(this.contextHandler,this.assets.path,Context.SESSIONS);
				resourceContext.setHandler(resources);
			
			this.contexts.push(resourceContext);
			
			
			// servlet
			print("servlet: ON");
			var cx = new Context(this.contextHandler,"/",Context.SESSIONS);
			
			var holder = new ServletHolder(new MooServlet());
			cx.addServlet(holder, "/*");

			
			this.contexts.push(cx);
		},

		Start: function(){
			print("==============================================");
			print("  STARTING JETTY WEB SERVER ....... hold on ");
			print("==============================================");
			//this.handlerCollection = new HandlerCollection();
	        this.handlerCollection.setHandlers(this.toJavaArray(Handler,[ this.contextHandler,new DefaultHandler(),this.requestLogHandler]));
			
			// STATISTICS - may or may not be necessary
			this.statsHandler = new StatisticsHandler();
	        this.statsHandler.addHandler(this.handlerCollection);
			
			
			this.server.addHandler(this.statsHandler);

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