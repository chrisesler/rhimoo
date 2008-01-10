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
import java.util.Enumeration;

import javax.servlet.ServletException;
import javax.servlet.http.*;

import javax.servlet.ServletInputStream;
import javax.servlet.ServletOutputStream;

import org.mortbay.jetty.Connector;
import org.mortbay.jetty.Handler;
import org.mortbay.jetty.HttpConnection;
import org.mortbay.jetty.Request;
import org.mortbay.jetty.Server;
import org.mortbay.jetty.handler.AbstractHandler;
import org.mortbay.jetty.handler.ContextHandler;
import org.mortbay.jetty.nio.SelectChannelConnector;


    
public abstract class MooHandlerTemplate extends AbstractHandler
{

	public abstract void ProcessHandler(HttpServletRequest request, HttpServletResponse response);
	public abstract void ControllerInit(HttpServletRequest request, HttpServletResponse response);
	public abstract void PushParams(String paramName, String paramValue);
	public abstract void CloseRequest();

    public void handle(String target, HttpServletRequest request, HttpServletResponse response, int dispatch) throws IOException, ServletException
    {
        Request base_request = (request instanceof Request) ? (Request)request:HttpConnection.getCurrentConnection().getRequest();
        base_request.setHandled(true);
        
		response.setStatus(HttpServletResponse.SC_OK);
		
		//Enumeration paramNames = request.getParameterNames();
        //while(paramNames.hasMoreElements()) {
          //String paramName = (String)paramNames.nextElement();
		  //String paramValue = request.getParameter(paramName);
		  //System.out.println(paramName);
          // NOTE use getParameterValues() if could be more than one of the parameter with the same name.
          //PushParams(paramName, paramValue);
        //}
		
		ControllerInit(request,response);
		
        ProcessHandler(request,response);

		CloseRequest();
    }
}
