//this.__extends__ = "javax.servlet.http.HttpServlet";
this.__extends__ = "MooHandlerTemplate";

var body, session, response, request, sm = null;
var headers, parameters = {};


		function ControllerInit(request,response){
			
			this.request = request;
			this.response = response;
			
			var sess = request.getSession();
			
			var paramNames = request.getParameterNames();
			//print($type(paramNames));
			for (var name in paramNames) {
				// NOTE use getParameterValues() if could be more than one of the parameter with the same name.
				print(name);
				if(request.getParameter(name)){
					this.parameters.name = request.getParameter(name);
				}
			}

	
			//print(this.parameters.toSource());
		}
		function PushParams(paramName,paramValue){
			//print(paramName);
			this.parameters.paramName = paramValue;
		}

		function CloseRequest(){
			this.response.setContentType(this.headers.contentType);
	        this.response.setStatus(200);
	        this.response.setContentLength(this.body.length);
	        this.response.getWriter().println(this.body);
		}
		
		function ProcessHandler(request, response){
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

			//document.innerHTML = html;

	        //response.setContentType("text/html");
	        //response.getWriter().println(html);

			this.headers = {
				contentType: 'text/html',
			    status: 200
			};
			//this.request.getSessionManager();
			//var sess = "session="+this.session.getSession(true).getId();
			this.body =  html;
		}
	
