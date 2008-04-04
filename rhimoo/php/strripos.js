rhimoo.defineClass("rhimoo.php.strripos",
{
	// Find position of last occurrence of a case-insensitive string in a string
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strripos/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: strripos('Kevin van Zonneveld', 'E');
    // *     returns 1: 16

  statics : function(haystack, needle, offset){
		var i = haystack.toLowerCase().lastIndexOf( needle.toLowerCase(), offset ); // returns -1
	    return i >= 0 ? i : false;
	},
	

	defer: function(statics){

		strripos = rhimoo.php.strripos;

	}
});