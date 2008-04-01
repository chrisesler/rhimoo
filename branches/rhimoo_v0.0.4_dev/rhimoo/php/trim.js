rhimoo.defineClass("rhimoo.php.trim",
{
	// Strip whitespace (or other characters) from the beginning and end of a string
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_trim/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: mdsjack (http://www.mdsjack.bo.it)
    // +   improved by: Alexander Ermolaev (http://snippets.dzone.com/user/AlexanderErmolaev)
    // +      input by: Erkekjetter
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: DxGx
    // +   improved by: Steven Levithan (http://blog.stevenlevithan.com)
    // *     example 1: trim('    Kevin van Zonneveld    ');
    // *     returns 1: 'Kevin van Zonneveld'
    // *     example 2: trim('Hello World', 'Hdle');
    // *     returns 2: 'o Wor'

  statics : function(str, charlist){
		var whitespace;

	    if(!charlist){
	        whitespace = ' \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';
	    } else{
	        whitespace = charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\$1');
	    }

		for (var i = 0; i < str.length; i++) {
			if (whitespace.indexOf(str.charAt(i)) === -1) {
			str = str.substring(i);
			break;
			}
		}
		for (i = str.length - 1; i >= 0; i--) {
			if (whitespace.indexOf(str.charAt(i)) === -1) {
				str = str.substring(0, i + 1);
				break;
	    	}
		}
		return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
	},
	

	defer: function(statics){

		trim = rhimoo.php.trim;

	}
});