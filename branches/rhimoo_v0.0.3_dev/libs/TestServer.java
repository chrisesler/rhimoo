// This is the Java application that is embedded with Jetty
// and this is the only file that even knows about Jetty.
// This file doesn't know about Rhino or any particular web framework.

import javax.servlet.http.*;
import java.io.*;
import javax.servlet.*;

import org.mortbay.jetty.Server;
import org.mortbay.jetty.servlet.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.mortbay.jetty.Connector;
import org.mortbay.jetty.Handler;
import org.mortbay.jetty.HttpConnection;
import org.mortbay.jetty.Request;
import org.mortbay.jetty.Server;
import org.mortbay.jetty.bio.SocketConnector;
import org.mortbay.jetty.handler.AbstractHandler;


public class TestServer
{
	
	public TestServer() { }
	
    public static void main(String[] args) throws Exception
    {
        Server server = new Server();
        Connector connector=new SocketConnector();
        connector.setPort(3000);
        server.setConnectors(new Connector[]{connector});
        //Handler handler = new TestMooServlet();
        //server.setHandler(handler);
		

		//Context context = new Context(server,"/",Context.SESSIONS);
		
		File rootDir = new File(".");
		rootDir = new File(rootDir.getCanonicalPath());

		
		RhinoLoader loader = new RhinoLoader(rootDir);
        Class c = Class.forName("MyServlet", false, loader);
        Handler myserv = (Handler) c.newInstance();
		
		//context.addServlet(new ServletHolder(myserv), "/*");

		//Handler handler=new HelloHandler();
		server.setHandler(handler);

        server.start();
        server.join();
    }
    
    /*public class TestMooServlet extends HttpServlet
	{
			public TestMooServlet() {
				super();
			}

			public void init(ServletConfig init) throws ServletException {
		        super.init(init);
			}

			public void printSession(){};

	          protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	          {
	              response.setContentType("text/html");
	              response.setStatus(HttpServletResponse.SC_OK);
	              response.getWriter().println("<h1>Hello SimpleServlet</h1>");
	              response.getWriter().println("session="+request.getSession(true).getId());
	          }
	}*/
}
