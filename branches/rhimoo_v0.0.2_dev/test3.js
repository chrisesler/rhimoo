importClass(java.lang.Thread,
            java.lang.Runnable,
            java.lang.System,
			java.lang.Class);

load("rhimoo/javaPackages.js");

importClass(Packages.MooAbstractServlet,
			Packages.MooServlet,
			Packages.MooClass,
			Packages.RhinoLoader,
			Packages.TestServer);

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

var loader = new RhinoLoader(new File(root));
 var c = JClass.forName("MyServlet", false, loader);
 var servv = c.newInstance();


//var holder = new ServletHolder(servv);


server.setHandler(servv);


//context.addServlet(holder, "/*");

server.start();
server.join();
