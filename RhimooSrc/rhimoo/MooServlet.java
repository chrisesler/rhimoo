// Copyright (C) 2008 Chris Esler.
//package rhimoo;

import javax.servlet.http.*;
import java.io.*;
import javax.servlet.*;

import org.mortbay.jetty.*;
import org.mortbay.jetty.servlet.*;

//public abstract class MooServlet extends HttpServlet
public class MooServlet extends HttpServlet
{
	
	    private Context rhimoo;
		private String handlerFile;
		//private ThreadLocal threadReqestHandler;
	
		public MooServlet() {	
			super();
		}
		
		ThreadLocal threadRequestHandler = new ThreadLocal() {
            protected synchronized Object initialValue() {
                return new RequestHandler();
            }
        };
		
		public void init(ServletConfig init) throws ServletException {
	        super.init(init);
		}
		
		
          protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
          {
				
				Request baseRequest = (request instanceof Request) ? (Request)request : HttpConnection.getCurrentConnection().getRequest();
	            baseRequest.setHandled(true);
				baseRequest.getSession(true);
				//getSessionHandler();
				((RequestHandler)(threadRequestHandler.get())).processRequest(request, response);
          }

		protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
          {

				Request baseRequest = (request instanceof Request) ? (Request)request : HttpConnection.getCurrentConnection().getRequest();
	            baseRequest.setHandled(true);
				baseRequest.getSession(true);
				//getSessionHandler();
				((RequestHandler)(threadRequestHandler.get())).processRequest(request, response);
          }
}
