//var cx = new Shell();

importClass(java.lang.Thread,
            java.lang.Runnable,
            java.lang.System,
			java.lang.Class);

load("rhimoo/javaPackages.js");

importClass(Packages.MooAbstractServlet,
			Packages.MooServlet,
			Packages.MooClass,
			Packages.RhinoLoader,
			Packages.TestServer,
			Packages.Shell,
			Packages.RequestHandler);

JClass = Class;

load("rhimoo/mootools/mootools-server-1.2-1331.js");

importPackage(java.io);

rootDir = new File(".");
rootDir = new File(rootDir.getCanonicalPath());
root = rootDir.getCanonicalPath()+"/";

 /*var loader = new RhinoLoader(new File(root));
 var c = Class.forName("Runner", false, loader);
 var runner = c.newInstance();
var test_c = runner.getClass();

for (i in test_c.constructors) { print("test_c.constructors[" + i + "] = " + test_c.constructors[i]); }*/
 //runner.run();

var server = new Server(3000);

//var context = new Context(server,"/",Context.SESSIONS);

//var loader = new RhinoLoader(new File(root));
//var c = JClass.forName("MyNewServlet", false, loader);
//var servv = c.newInstance();



	contexts = new ContextHandlerCollection();
	server.setHandler(contexts);
	
	sessHandler = new SessionHandler();
	         
	root = new Context(contexts,"/",Context.SESSIONS);
	//root.setSessionHandler(sessHandler);
	root.addServlet(new ServletHolder(new MooServlet("app.js")), "/*");
	
	other = new Context(contexts,"/other",Context.SESSIONS);
	//other.setSessionHandler(sessHandler);
	other.addServlet(new ServletHolder(new MooServlet("apple.js")), "/*");

//var holder = new ServletHolder(new MooServlet("apple.js"));


//server.setHandler(servv);


//context.addServlet(holder, "/*");

server.start();
server.join();
//new TestServer();