importClass(java.lang.Thread,
            java.lang.Runnable,
            java.lang.System,
			java.lang.Class);

load("rhimoo/javaPackages.js");

importClass(Packages.MooAbstractServlet,
			Packages.MooServlet,
			Packages.MooClass);

//load("rhimoo/mootools/mootools-server-1.2-1331.js");

var me = {
		body: null,
		headers: {},
		session: null,
		response: null,
		request: null,
		parameters: {},
		sm: null,
		session: null
	};

//$extend(

//meServ = new HttpServlet(me);
meServ = new MooAbstractServlet(me)
//meServ.init();
//meServ.getClass().setName('meServ');

//print(me.getClass());

/*var s = {};
  s["methods"] = me;
  s["adapter"] = meServ;
  s["classLoader"] = s["adapter"].getClass().getClassLoader();
  s["name"] = s["adapter"].getClass().getName();
  s["holder"] = new JavaAdapter(ServletHolder, {
    newInstance: function () {
      return new HttpServlet(me);
    }
  });
  s["holder"].setName(s["name"]);
  s["holder"].setClassName(s["classloader"]);

*/
var server = new Server(3000);

var context = new Context(server,"/",Context.SESSIONS);
var holder = new ServletHolder(meServ);

//print(holder.getServlet());
context.addServlet(holder, "/*");

server.start();
//server.join();


