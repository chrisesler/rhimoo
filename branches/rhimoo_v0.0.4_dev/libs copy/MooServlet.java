// Copyright (C) 2006 Chris Double.
// 
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
// 
// 1. Redistributions of source code must retain the above copyright notice,
//    this list of conditions and the following disclaimer.
// 
// 2. Redistributions in binary form must reproduce the above copyright notice,
//    this list of conditions and the following disclaimer in the documentation
//    and/or other materials provided with the distribution.
// 
// THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES,
// INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
// FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
// DEVELOPERS AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
// OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
// WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
// OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
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
	
		public MooServlet(String jsHandle) {
			super();
			handlerFile = jsHandle;
		}
		
		ThreadLocal threadRequestHandler = new ThreadLocal() {
            protected synchronized Object initialValue() {
                return new RequestHandler(handlerFile);
            }
        };
		
		public void init(ServletConfig init) throws ServletException {
	        super.init(init);
		}
		
		public void printSession(){};
		
          protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
          {
				 System.out.println("Hey There!");
				
				Request baseRequest = (request instanceof Request) ? (Request)request : HttpConnection.getCurrentConnection().getRequest();
	            baseRequest.setHandled(true);

				baseRequest.getSession(true);
				//Context cx = Context.enter();
              //response.setContentType("text/html");
              //response.setStatus(HttpServletResponse.SC_OK);
              //response.getWriter().println("<h1>Hello SimpleServlet</h1>");
              //response.getWriter().println("session="+request.getSession(true).getId());
				//servv(request,response);
				((RequestHandler)(threadRequestHandler.get())).processRequest(request, response);
          }
}
