/*
	template parser. 
	renders like ERB
	
	based on JSTemplates by Armin Ronacher.
	see: http://lucumr.pocoo.org/cogitations/2007/06/14/erb-for-javascript/
*/
rhimoo.defineClass("rhimoo.template.parser",
{
  requires: [
			"rhimoo.template.values",
			"rhimoo.template.macros",
			],

  statics : new Class({

		BLOCK_REGEX : /(^\s*%.*?$|<%(?!%)(?:%%|[^%])*?%>)/m,

		buffer : [],
		
		temp : 'YAY',

		//initialize: function(source){
		initialize: function(file){
			print("%%%%%%%  "+root+"views/"+file);
			var source = readFile(root+"views/"+file);
			var inBlock=true;
			var parts = source.split(this.BLOCK_REGEX);
			
		    for (var i = 0, n = parts.length; i != n; i++) {
			
		      var part = parts[i].replace(/(<|>)%%/g, '$1%');
		
		      if (inBlock = !inBlock){
				if(part[0] == '<'){
					part = part.substr(2, part.length - 4);
				}else{
					part = part.substr(part.indexOf('%') + 1, part.length);
				}
			}
			
			/*
			if(inBlock){
				if(part[0] != '=' && part[0] != '#'){
					if(part.indexOf("(") != -1){
						part = "rhimoo.template.macros."+part.substr(1, part.length);
					}
				}else{
					if(part.indexOf("(") != -1 && part.substr(part.indexOf('(') - 1, 1) != ' '){
						part = "rhimoo.template.macros."+part.substr(2, part.length);
					}
				}
			}*/
		        

		      this.buffer.push(inBlock ? (part[0] != '=' ? (part[0] == '#' ? '' : part)
		        : ('__buffer__.push(' + part.substr(1, part.length - 1) + ')'))
		        : ('__buffer__.push("' + part.replace(/\\/g, '\\\\').
		           replace(/\n/g, '\\\n').replace(/"/g, '\\"') + '")'));
		    }
			//print(this.buffer);
		    this.renderFunc = eval('function(__buffer__){' + this.buffer.join(';') + '}');
		},

		//render : function(context) {
		render : function() {
		    var buffer = [];
		    //this.renderFunc.call(context, buffer);
			this.renderFunc.call(rhimoo.template.values, buffer);
		    return buffer.join('');
		}

		
	}),
	
	/*
	  *****************************************************************************
	     DEFER
	  *****************************************************************************
	  */

	  defer : function(statics)
	  {
	    print("----- loaded template parser");
	  }
});

