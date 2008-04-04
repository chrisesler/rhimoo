// This file doesn't know about Jetty but does know about servlet requests and response.
// This file could be used with servers other than Jetty by changing the caller Java app to this file.
// 
// This file is the only Java file that knows about the JavaScript files of the server-side app being deployed
// 
// This file is the glue that joins the whole system together (servlet, Rhino JavaScript shell, JavaScript files).
//     This file converts Java servlet request object to a JavaScript object.
//     These JavaScript objects are processed in the JavaScript app (interact with database etc).
//     The JavaScript app populates a JavaScript object as the response
//     This file then converts this JavaScript response into the Java servlet response object.

//package rhimoo;

import java.io.IOException;
import java.io.File;
import java.io.InputStream;
import java.io.FileInputStream;
import java.util.Enumeration;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletInputStream;
import javax.servlet.ServletOutputStream;

import org.mozilla.javascript.*;

public class RequestHandler
{
    private Shell shell;
    
    public RequestHandler()
    {
        try {
            shell = new Shell();
        }
        catch (Exception ee) {
            System.out.println(ee.toString());
            // ...
        }

        // load the JavaScript files for the web app framework and
        // the files for the specific web app.
        shell.loadFile("rhimoo/routing.js");
    }

    public void processRequest(HttpServletRequest request, HttpServletResponse response) throws IOException
    {
        // ---------------------------------------------------------------------
        // STEP 0: if GET request then look for a static file first.
        // In production this step would be accomplished better by a proxy server
        //      eg. nginx or Apache's httpd
        // ---------------------------------------------------------------------
        
        // ...
        
        
        
        // ---------------------------------------------------------------------
        // STEP 1: prepare JavaScript request object from the Java request object and
        // create an empty response object that the JavaScript web framework and web app
        // will populate. You could send the Java request and response objects
        // to the JavaScript since Rhino allows mixing Java objects directly in 
        // the JavaScript; however, I want to have only JavaScript in the JavaScript.
        // This way the JavaScript could be ported to run on the Spidermonkey or some
        // other JavaScript engine more easily.
        //
        // (A complication arises at this point if you want to have file uploads
        // with multipart HTML forms. See Apache Commons project for Java code
        // to attack the file upload problem.)
        // ---------------------------------------------------------------------

        // Create the JavaScript request object
        Scriptable req = shell.getContext().newObject(shell);

        //Scriptable reqq = shell.getContext().newObject(shell);
        //ScriptableObject.defineProperty(req, "obj", request, 0); // note zero means no attributes

       /*
        // Populate the JavaScript request object from the Java request object
        Scriptable url = shell.getContext().newObject(shell);
        ScriptableObject.defineProperty(req, "url", url, 0); // note zero means no attributes
		*/
		Scriptable obj = shell.getContext().newObject(shell);
		ScriptableObject.defineProperty(req, "obj", obj, 0);
		ScriptableObject.defineProperty(req, "raw", request, 0);
		
		ScriptableObject.defineProperty(obj, "authType", request.getAuthType(), 0);
		ScriptableObject.defineProperty(obj, "contextPath", request.getContextPath(), 0);
		ScriptableObject.defineProperty(obj, "headerNames", request.getHeaderNames(), 0);
		ScriptableObject.defineProperty(obj, "method", request.getMethod(), 0);
		ScriptableObject.defineProperty(obj, "pathInfo", request.getPathInfo(), 0);
		ScriptableObject.defineProperty(obj, "pathTranslated", request.getPathTranslated(), 0);
		ScriptableObject.defineProperty(obj, "queryString", request.getQueryString(), 0);
		ScriptableObject.defineProperty(obj, "remoteUser", request.getRemoteUser(), 0);
		ScriptableObject.defineProperty(obj, "requestedSessionId", request.getRequestedSessionId(), 0);
		ScriptableObject.defineProperty(obj, "requestURI", request.getRequestURI(), 0);
		ScriptableObject.defineProperty(obj, "requestURL", request.getRequestURL(), 0);
		ScriptableObject.defineProperty(obj, "servletPath", request.getServletPath(), 0);	
		ScriptableObject.defineProperty(obj, "userPrincipal", request.getUserPrincipal(), 0);
		ScriptableObject.defineProperty(obj, "isRequestedSessionIdFromCookie", request.isRequestedSessionIdFromCookie(), 0);
		ScriptableObject.defineProperty(obj, "isRequestedSessionIdFromURL", request.isRequestedSessionIdFromURL(), 0);
		ScriptableObject.defineProperty(obj, "isRequestedSessionIdValid", request.isRequestedSessionIdValid(), 0);
		//ScriptableObject.defineProperty(obj, "isUserInRole", request.isUserInRole(), 0);
		ScriptableObject.defineProperty(obj, "remoteAddr", request.getRemoteAddr(), 0);
		ScriptableObject.defineProperty(obj, "remoteHost", request.getRemoteHost(), 0);
		ScriptableObject.defineProperty(obj, "characterEncoding", request.getCharacterEncoding(), 0);
		ScriptableObject.defineProperty(obj, "contentLength", request.getContentLength(), 0);
		ScriptableObject.defineProperty(obj, "contentType", request.getContentType(), 0);
		ScriptableObject.defineProperty(obj, "locale", request.getLocale(), 0);
		ScriptableObject.defineProperty(obj, "locales", request.getLocales(), 0);
		ScriptableObject.defineProperty(obj, "scheme", request.getScheme(), 0);
		ScriptableObject.defineProperty(obj, "serverName", request.getServerName(), 0);
		ScriptableObject.defineProperty(obj, "isSecure", request.isSecure(), 0);
		
		// COOKIES
		ScriptableObject.defineProperty(req, "cookies", request.getCookies(), 0);
		
		// SESSION
		ScriptableObject.defineProperty(req, "session", request.getSession(true), 0);

		// PARAMETERS
		Scriptable parameters = shell.getContext().newObject(shell);
        ScriptableObject.defineProperty(req, "parameters", parameters, 0);

		Enumeration paramNames = request.getParameterNames();
        while(paramNames.hasMoreElements()) {
          String paramName = (String)paramNames.nextElement();
          // NOTE use getParameterValues() if could be more than one of the parameter with the same name.
          ScriptableObject.defineProperty(parameters, paramName, request.getParameter(paramName), 0);
        }

		// HEADERS
		Scriptable reqheaders = shell.getContext().newObject(shell);
        ScriptableObject.defineProperty(req, "headers", reqheaders, 0);

		Enumeration reqheaderNames = request.getHeaderNames();
        while(reqheaderNames.hasMoreElements()) {
          String reqheaderName = (String)reqheaderNames.nextElement();
          // NOTE use getParameterValues() if could be more than one of the parameter with the same name.
          ScriptableObject.defineProperty(reqheaders, reqheaderName, request.getHeader(reqheaderName), 0);
        }

/*
        ScriptableObject.defineProperty(url, "method", request.getMethod(), 0);
		//ScriptableObject.defineProperty(url, "remoteUser", request.getRemoteUser(), 0);
        ScriptableObject.defineProperty(url, "scheme", request.getScheme(), 0);
        ScriptableObject.defineProperty(url, "server", request.getServerName(), 0);
        ScriptableObject.defineProperty(url, "port", request.getServerPort(), 0);
        ScriptableObject.defineProperty(url, "path", request.getPathInfo(), 0);
        ScriptableObject.defineProperty(url, "queryString", request.getQueryString(), 0);
        
        Scriptable parameters = shell.getContext().newObject(shell);
        ScriptableObject.defineProperty(req, "parameters", parameters, 0);

		// SESSION
		Scriptable session = shell.getContext().newObject(shell);
        ScriptableObject.defineProperty(req, "session", session, 0);
		ScriptableObject.defineProperty(session, "obj", request.getSession(true), 0);
		ScriptableObject.defineProperty(session, "remoteUser", request.getRemoteUser(), 0);

        
        Enumeration paramNames = request.getParameterNames();
        while(paramNames.hasMoreElements()) {
          String paramName = (String)paramNames.nextElement();
          // NOTE use getParameterValues() if could be more than one of the parameter with the same name.
          ScriptableObject.defineProperty(parameters, paramName, request.getParameter(paramName), 0);
        }*/

        // Create the empty JavaScript response object
        Scriptable res = shell.getContext().newObject(shell);



        // ---------------------------------------------------------------------
        // STEP 2: call the web framework to use the request and generate the response
        // The framework *must* build some kind of response even if just an error message.
        // ---------------------------------------------------------------------

        // "app" is the single global entry function of the JavaScript web app framework.
        Object[] args = {req, res};
        shell.callGlobalFunction("router", args);



        // ---------------------------------------------------------------------
        // STEP 3: take properties from the JavaScript response object
        // and add them to the Java response object
        // ---------------------------------------------------------------------

        Scriptable headers = Context.toObject(ScriptableObject.getProperty(res, "headers"), shell);

       
        Double status = Context.toNumber(ScriptableObject.getProperty(headers, "status"));
        response.setStatus(status.intValue());


		String contentType = Context.toString(ScriptableObject.getProperty(headers, "contentType"));
        response.setContentType(contentType);

       	String body = Context.toString(ScriptableObject.getProperty(res, "body"));
       	response.setContentLength(body.length());
       	response.getWriter().println(body);
		
    }

}
