/**
 * Simple JavaScript Templates
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 * very simple javascript template engine similar to ERB.
 *
 * example::
 *
 *    var template = new JSTemplate('Hello <%= escape(username) %>!');
 *    document.write(template.render({username: 'H4><0r'}));
 *
 * You can use `<%` / `%>` to embed code and `<%=` / `%>` to print something
 * dynamical to the template. By doubling the percent-sign you can write
 * a raw delimiter. Using `<%#` / `%>` you can embed comments to the page that
 * are not rendered.
 *
 * available helper functions:
 *
 * ``escape(string)``
 *    XML/SGML escape a string
 *
 * ``each(seq, callback)``
 *    call the callback with the item and the current index for
 *    each iteration.
 *
 * :copyright: 2007 by Armin Ronacher.
 * :license: BSD.
 */

var JSTemplate = new Class({
	
	BLOCK_REGEX : /(^\s*%.*?$|<%(?!%)(?:%%|[^%])*?%>)/m,
	
	buffer : [],
	
	initialize: function(source){
		var inBlock=true, parts = source.split(this.BLOCK_REGEX);
	    for (var i = 0, n = parts.length; i != n; i++) {
	      var part = parts[i].replace(/(<|>)%%/g, '$1%');
	
		/*if (inBlock = !inBlock)
	        part = (part[0] == '<') ? part.substr(2, part.length - 4)
	             : part.substr(part.indexOf('%') + 1, part.length);*/

		if (inBlock = !inBlock){
			if(part[0] == '<'){
				part = part.substr(2, part.length - 4);
			}else{
				part = part.substr(part.indexOf('%') + 1, part.length);
			}
		}
		
		if(inBlock){
			if(part[0] != '=' && part[0] != '#'){
				if(part.indexOf("(") != -1){
					part = "macro_"+part.substr(1, part.length);
				}
			}else{
				if(part.indexOf("(") != -1 && part.substr(part.indexOf('(') - 1, 1) != ' '){
					part = "macro_"+part.substr(2, part.length);
				}
			}
		}
		
		
		this.buffer.push(inBlock ? (part[0] != '=' ? (part[0] == '#' ? '' : part)
		: ('__buffer__.push(' + part.substr(1, part.length - 1) + ')'))
		: ('__buffer__.push("' + part.replace(/\\/g, '\\\\').
		replace(/\n/g, '\\\n').replace(/"/g, '\\"') + '")'));
		}
		console.log(this.buffer);
	    this.renderFunc = eval('function(__buffer__){' + this.buffer.join(';') + '}');
	},
	
	render : function(context) {
	    var buffer = [];
	    this.renderFunc.call(context, buffer);
	    return buffer.join('');
	},
	
	each : function(seq, callback) {
	    for (var i = 0, n = seq.length; i != n; i++)
	      callback(seq[i], i);
	  },
	
	escape : function(s) {
	    return new String(s);
	  }
});



