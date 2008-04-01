rhimoo.defineClass("rhimoo.php.strpos",
{
	// Find position of first occurrence of a string
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strpos/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: strpos('Kevin van Zonneveld', 'e', 5);
    // *     returns 1: 14

  statics : function(f_haystack, f_needle, f_offset){
		var i = haystack.indexOf( needle, offset ); // returns -1
	    return i >= 0 ? i : false;
	},
	

	defer: function(statics){

		strpos = rhimoo.php.strpos;

	}
});