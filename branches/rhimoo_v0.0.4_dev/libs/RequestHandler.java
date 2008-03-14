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

import java.io.IOException;
import java.io.File;
import java.io.InputStream;
import java.io.FileInputStream;
import java.util.Enumeration;

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
                
        // Populate the JavaScript request object from the Java request object
        Scriptable url = shell.getContext().newObject(shell);
        ScriptableObject.defineProperty(req, "url", url, 0); // note zero means no attributes

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
        }

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

        String authenticate = Context.toString(ScriptableObject.getProperty(headers, "authenticate"));

        Double status = Context.toNumber(ScriptableObject.getProperty(headers, "status"));
        response.setStatus(status.intValue());

		if(authenticate == "true"){
				response.setStatus(response.SC_UNAUTHORIZED);
				String realm = Context.toString(ScriptableObject.getProperty(headers, "realm"));
				response.setHeader("WWW-Authenticate",
				     "BASIC realm=\""+realm+"\"");
			
		}else{

			String contentType = Context.toString(ScriptableObject.getProperty(headers, "contentType"));
	        response.setContentType(contentType);
	
        	String body = Context.toString(ScriptableObject.getProperty(res, "body"));
        	response.setContentLength(body.length());
        	response.getWriter().println(body);
		}
    }

}
