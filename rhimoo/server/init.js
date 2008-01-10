rhimoo.defineClass("rhimoo.server.init",
{
	requires: [
		"rhimoo.server.templates.jettyServer",
		"rhimoo.server.templates.jettyHandler"
	],
	
  statics : new Class({
		Implements: Options,
		options: {
			useAJP: false,
			ports: {
				server: 3000,
				ajp: 8080
			},
			assets: {
				path: "/",
				file: "./public"
			}

		},

		bootStrap: null,
		jetty: null,

		initialize: function(options){

			if(options){
				this.setOptions(options);
			}

			//$extend(this.BootstrapTemplate.useAJP, this.options);
			var bootstrap = $merge(this.options,rhimoo.server.templates.jettyServer);

			//print(bootstrap.toSource());

			this.jetty = new JavaAdapter(MooServerTemplate,bootstrap);
			this.jetty.Setup();
			//print(this.BootstrapTemplate.toSource());

		},

		makeHandler: function(handler){
			print("++ making handler");
			var newHandler = $merge(handler,rhimoo.server.templates.jettyHandler);
			return new JavaAdapter(MooHandlerTemplate,newHandler);
		},
		
		makeServlet: function(methods){
			print("++ making servlet");
			methods = $merge(methods,rhimoo.server.templates.jettyHandler);
			
			var s = {};
			  s["methods"] = methods;
			  s["adapter"] = new JavaAdapter(MooServletTemplate, methods);
			
		//print("CLASSNAME: "+s["adapter"].newInstance());
			
			  s["classloader"] = s["adapter"].getClass().getClassLoader();
			  s["name"] = s["adapter"].getClass().getName();
			  s["holder"] = new JavaAdapter(ServletHolder, {
			    newInstance: function () {
			      return new JavaAdapter(MooServletTemplate, methods);
			    }
			  });
			  s["holder"].setName(s["name"]);
			  s["holder"].setClassName(s["name"]);
			  return s;
			
			//return new JavaAdapter(MooServletTemplate,newServlet);
		},
		
		loadControllers : function(){
			print("==============================================");
			print("  LOADING CONTROLLERS ");
			print("==============================================");
			
			var controllerDir = new File(root+"controllers");
			var fileList = controllerDir.list();
			//print(fileList);
			for(var i = 0; i < fileList.length; i++) {
				var file = fileList[i];
				if(file.substr(0,1) != "."){
					load(root+"controllers/"+file);
				
					// test for handlers - this works
					if(file.test("HANDLE","i")){
						print("HANDLER : "+file);
						var handle = this.makeHandler(controllerItem.controller);
						this.jetty.addHandler(controllerItem.path,handle);
					}
					// test for servlets
					// servlets is a work in progress
					// have gotten server to initialize, but 
					// servlet not getting initialized for some reason
					// so testing only handlers for now
					if(file.test("SERVLET","i")){
						print("SERVLET : "+file);
						//var servlet = this.makeServlet(controllerItem.controller);
						//this.jetty.addServlet(controllerItem.path,controllerItem.contextPath,servlet);
					}
				}
			}
		}

	})
});