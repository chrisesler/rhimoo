rhimoo.defineClass("rhimoo.php.ltrim",
{
	// Strip whitespace (or other characters) from the beginning of a string
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_ltrim/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: Erkekjetter
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: ltrim('    Kevin van Zonneveld    ');
    // *     returns 1: 'Kevin van Zonneveld    '

  statics : function(str, charlist){
		charlist = !charlist ? ' \s\xA0' : charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\$1');
	    var re = new RegExp('^[' + charlist + ']+', 'g');
	    return str.replace(re, '');
	},
	

	defer: function(statics){

		ltrim = rhimoo.php.ltrim;

	}
});