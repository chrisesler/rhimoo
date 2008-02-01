//========================================================================
//Copyright 2006 Mort Bay Consulting Pty. Ltd.
//------------------------------------------------------------------------
//Licensed under the Apache License, Version 2.0 (the "License");
//you may not use this file except in compliance with the License.
//You may obtain a copy of the License at 
//http://www.apache.org/licenses/LICENSE-2.0
//Unless required by applicable law or agreed to in writing, software
//distributed under the License is distributed on an "AS IS" BASIS,
//WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//See the License for the specific language governing permissions and
//limitations under the License.
//========================================================================

import java.io.*;
import java.util.*;

import javax.servlet.*;
import javax.servlet.http.*;

import org.mortbay.jetty.*;
import org.mortbay.jetty.handler.*;
import org.mortbay.jetty.nio.SelectChannelConnector;
import org.mortbay.jetty.servlet.*;


    
public abstract class MooHandlerTemplate extends AbstractHandler
{

	public SessionHandler handler = new SessionHandler();

	public abstract void ProcessHandler(HttpServletRequest request, HttpServletResponse response);
	public abstract void ControllerInit(HttpServletRequest request, HttpServletResponse response);
	public abstract void PushParams(String paramName, String paramValue);
	public abstract void CloseRequest();
	
	
	
	public void main(String[] args) 
	throws Exception
	{
		//handler = new SessionHandler();
		//session = handler.getSession();
	}
	
    public void handle(String target, HttpServletRequest request, HttpServletResponse response, int dispatch) throws IOException, ServletException
    {
        Request base_request = (request instanceof Request) ? (Request)request:HttpConnection.getCurrentConnection().getRequest();
        
		//handler = new SessionHandler();
		//session = handler.getSession(true);

		

		base_request.setHandled(true);		
        
		response.setStatus(HttpServletResponse.SC_OK);

		//base_request.getSession(true);
		
		ControllerInit(request,response);
		
        ProcessHandler(request,response);

		CloseRequest();
    }
}
