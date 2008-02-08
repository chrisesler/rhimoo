importClass(java.lang.Thread,
            java.lang.Runnable,
            java.lang.System,
			java.lang.Class);

load("rhimoo/javaPackages.js");

importClass(Packages.MooAbstractServlet);
importClass(Packages.MooServlet);
importClass(Packages.MooClass);

load("rhimoo/mootools/mootools-server-1.2-1331.js");

var methods = new Object({


	
	doGet : function(request,response){
		print("hey");
		response.setContentType("text/html");
          response.setStatus(HttpServletResponse.SC_OK);
          response.getWriter().println("<h1>Hello SimpleServlet</h1>");
          //response.getWriter().println("session="+request.getSession(true).getId());
		
	}
	
});



function toJArray(type, objects) {
  var jarray = java.lang.reflect.Array.newInstance(type, objects.length);
  for(var i = 0; i < objects.length; ++i) {
    jarray[i] = objects[i];
  }
  return jarray;
}

//methods = new JavaAdapter(MooClass, methods);//toJArray(Servlet,methods);

servlet = $extend(methods,HttpServlet);
//servlet = methods;

//servlet.classLoader = servlet.getClass().getClassLoader();
//servlet.name = servlet.getClass().getClassLoader().getClass();
//servlet = new JavaAdapter(HttpServlet, methods);

var s = {};
  s["methods"] = methods;
  s["adapter"] = servlet;
  s["classLoader"] = s["adapter"].getClass().getClassLoader().getClass();
  s["name"] = s["adapter"].getClass().getName();
  s["holder"] = new JavaAdapter(ServletHolder, {
    newInstance: function () {
      return new JavaAdapter(HttpServlet, methods);
    }
  });
  s["holder"].setName(s["name"]);
  s["holder"].setClassName(s["classloader"]);

//servlet = new MooServlet();





/*var servlet = new JavaAdapter(MooServlet, methods);

var test = servlet.getClass().getMethods();
*/


/*for(var item in servlet.getClass().getClassLoader()){
	print(item.toSource());
}
print(servlet.getClass().getMethods().toSource());
print(" ");
print(servlet.getClass().getName());



$extend(MooClass,HttpServlet);

var tmp = new MooClass();

print("+++");
print($type(tmp));
for(var item in tmp.getClass().getClassLoader()){
	print(item.toSource());
}
print("PARENT: "+tmp.getClass().getClassLoader().loadClass("MooClass"));
print("+++");*/



var server = new Server(3000);

var context = new Context(server,"/",Context.SESSIONS);
var holder = new ServletHolder(new servlet);

print(holder.getServlet());
context.addServlet(holder.getServlet().getClass(), "/*");

server.start();
//server.join();
         


//var thingy =  new MooServlet();
//var test = new thingy();
//var test_c = thingy.getClass();

//for (i in test_c.constructors) { print("test_c.constructors[" + i + "] = " + test_c.constructors[i]); }

//var me = new test_c.constructors[1]();