//========================================================================
// Copyright 2008 Chris Esler
//------------------------------------------------------------------------

import java.io.*;

import javax.servlet.*;
import javax.servlet.http.*;

import org.mortbay.jetty.*;
import org.mortbay.jetty.handler.*;
import org.mortbay.jetty.nio.*;
import org.mortbay.jetty.servlet.*;

public abstract class MooServer
{
	
	public static void main(String[] args) 
	throws Exception
	{}

	public abstract void Setup();
	
	public abstract void Start();
	
    
}