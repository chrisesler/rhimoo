rhimoo.defineClass("rhimoo.server.templates.jettyHandler",
{
  statics : {
		body: null,
		headers: {},
		session: null,
		response: null,
		request: null,
		parameters: {},
		sm: null,
		session: null,
		ControllerInit: function(request,response){
			
			this.request = request;
			this.response = response;
			
			user = new Cookie("user","Jennifer");
			 user.setMaxAge(3600);
			response.addCookie(user);
			
			var paramNames = request.getParameterNames();
			//print($type(paramNames));
			for (var name in paramNames) {
				// NOTE use getParameterValues() if could be more than one of the parameter with the same name.
				//print(name);
				if($type(request.getParameter(name))){
					this.parameters.name = request.getParameter(name);
				}
			}

	
			//print(this.parameters.toSource());
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
	},
	defer: function(statics){
		print("----- loaded jettyHandler Template");
	}
});
