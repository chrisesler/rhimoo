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

load("scripts/env.js");
window.location = "scripts/construct.html";

//window = Window = {};
//document = {};

//load("scripts/mootools-server.js");
load("scripts/mootools-release-1.11.js");
//load("scripts/mootools-trunk-1313.js");
load("models/model.js");



MooServer = new Class({
	
	options: {
		useAJP: false,
		ports: {
			server: 3000,
			ajp: 8080
		},
		assets: {
			path: "/assets",
			file: "./static"
		}
		
	},
	
	bootStrap: null,
	server: null,
	
	initialize: function(options){
		
		if(options){
			this.setOptions(options);
		}
		
		//$extend(this.BootstrapTemplate.useAJP, this.options);
		var bootstrap = $merge(this.options,this.BootstrapTemplate);
		
		//print(bootstrap.toSource());
		
		this.server = new JavaAdapter(MooServerTemplate,bootstrap);
		this.server.Setup();
		//print(this.BootstrapTemplate.toSource());
		
	},
	
	makeHandler: function(handler){
		var newHandler = $merge(handler,this.handlerTemplate);
		return new JavaAdapter(MooHandlerTemplate,newHandler);
	},
	
	// template for server
	BootstrapTemplate : {

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

	        context0 = this.createContext();
	        context0.setContextPath(this.assets.path);
	        handler0 = new ResourceHandler();
			handler0.setResourceBase(this.assets.file);
	        context0.setHandler(handler0);

		},

		Start: function(){

			this.contextHandler = new ContextHandlerCollection();
	        this.contextHandler.setHandlers(this.toJavaArray(Handler,this.contexts));

	        this.handlerCollection = new HandlerCollection();
	        this.handlerCollection.setHandlers(this.toJavaArray(Handler,[this.contextHandler,new DefaultHandler()]));

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
		},

		toJavaArray: function(type, objects) {
			var jarray = java.lang.reflect.Array.newInstance(type, objects.length);
			for(var i = 0; i < objects.length; ++i) {
				jarray[i] = objects[i];
			}
			return jarray;
		}
			
	},
	
	// template for handlers - mostly utility functions
	handlerTemplate : {
		body: null,
		headers: {},
		session: null,
		response: null,
		request: null,
		parameters: {},
		Init: function(request,response){
			this.request = request;
			this.response = response;
			
			var paramNames = request.getParameterNames();
			print($type(paramNames));
			for (var name in paramNames) {
				// NOTE use getParameterValues() if could be more than one of the parameter with the same name.
				if($type(request.getParameter(name))){
					this.parameters.name = request.getParameter(name);
				}
			}
	
	
			print(this.parameters.toSource());
		},
		PushParams: function(paramName,paramValue){
			//print(paramName);
			this.parameters.paramName = paramValue;
		},
		
		CloseRequest: function(){
			this.response.setContentType(this.headers.contentType);
	        this.response.setStatus(this.headers.status.toInt());
	        this.response.setContentLength(this.body.length);
	        this.response.getWriter().println(this.body);
		}
	}
	
});
MooServer.implement(new Options);

ms = new MooServer({
	useAJP: true,
	ports: {
		server: 3000,
		ajp: 8010
	},
	assets: {
		path: "/assets",
		file: "./static"
	}
	
});

MooHandler = ms.makeHandler({
	ProcessHandler: function(request, response){
		//var wassup = readFile("static/test.html");
		
		//var context = {}; // a hash of data for the view

		//context.articles = ArticleModel.findAll();

	  //response.body = html; 
		//var html = this.viewIndex(context);

		//window.location = "../views/index.html";
		//document.load("../views/index.html");
		//var html = document.innerHTML;
		
		html = readFile("views/index.html");
		html.toString();
		
		document.innerHTML = html;
		
        //response.setContentType("text/html");
        //response.getWriter().println(html);

		this.headers = {
			contentType: 'text/html',
		    status: 200
		};
		
		this.body =  document.innerHTML; 
	},
	viewIndex: function(context) {
	  var html = '<html><head><title>Article Index</title><style>dt{font-weight:bold;}</style></head><body>';

	  html += '<h1>Synergy Blog 2</h1>'

	html += '<strong>'+this.request.getMethod()+'</strong>'

	  html += '<dl>';
	  for (var i=0; i<context.articles.length; i++) {
	    var article = context.articles[i];
	    html += '<dt>' + article.title + '</dt><dd>' + article.body + '</dd>';
	  }
	  html += '</dl>';

	  html += '</body></html>';
	  return html;
	},
	
});
ms.server.addHandler("/",MooHandler);


ms.server.Start();