rhimoo.defineClass("rhimoo.php.strrpos",
{
	// Find position of last occurrence of a char in a string
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strrpos/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: strrpos('Kevin van Zonneveld', 'e');
    // *     returns 1: 16

  statics : function(haystack, needle, offset){
		var i = haystack.lastIndexOf( needle, offset ); // returns -1
	    return i >= 0 ? i : false;
	},
	

	defer: function(statics){

		strrpos = rhimoo.php.strrpos;

	}
});