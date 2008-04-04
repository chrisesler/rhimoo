rhimoo.defineClass("rhimoo.php.in_array",
{
	// Checks if a value exists in an array
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_in_array/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: in_array('van', ['Kevin', 'van', 'Zonneveld']);
    // *     returns 1: true

  statics : function(needle, haystack, strict){
		var found = false, key, strict = !!strict;

	    for (key in haystack) {
	        if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
	            found = true;
	            break;
	        }
	    }

	    return found;
	},
	

	defer: function(statics){

		in_array = rhimoo.php.in_array;

	}
});