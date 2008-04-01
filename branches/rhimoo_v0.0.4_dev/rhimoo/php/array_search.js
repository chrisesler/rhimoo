rhimoo.defineClass("rhimoo.php.array_search",
{

	// Searches the array for a given value and returns the corresponding key if
    // successful
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_search/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: array_search('zonneveld', {firstname: 'kevin', middle: 'van', surname: 'zonneveld'});
    // *     returns 1: 'surname'

  statics : function(needle, haystack, strict){
		var strict = !!strict;

	    for(var key in haystack){
	        if( (strict && haystack[key] === needle) || (!strict && haystack[key] == needle) ){
	            return key;
	        }
	    }

	    return false;
	},
	

	defer: function(statics){
				
		array_search = rhimoo.php.array_search;

	}
});