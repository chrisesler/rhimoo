rhimoo.defineClass("rhimoo.php.preg_quote",
{
	// Quote regular expression characters
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_preg_quote/
    // +       version: 803.2519
    // +   original by: booeyOH
    // +   improved by: Ates Goral (http://magnetiq.com)
    // *     example 1: preg_quote("$40");
    // *     returns 1: "\\\$40"
    // *     example 2: preg_quote("*RRRING* Hello?");
    // *     returns 2: "\\*RRRING\\* Hello\\?"
    // *     example 3: preg_quote("\\.+*?[^]$(){}=!<>|:");
    // *     returns 3: "\\\\\\.\\+\\*\\?\\[\\^\\]\\$\\(\\)\\{\\}\\=\\!\\<\\>\\|\\:"

  statics : function(str){
		return str.replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, "\\$1");
	},
	

	defer: function(statics){

		preg_quote = rhimoo.php.preg_quote;

	}
});