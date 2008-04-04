rhimoo.defineClass("rhimoo.php.stripos",
{
	// Find position of first occurrence of a case-insensitive string
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_stripos/
    // +       version: 803.2519
    // +     original by: Martijn Wieringa
    // *         example 1: stripos('ABC', 'a');
    // *         returns 1: 0

  statics : function(f_haystack, f_needle, f_offset){
		var haystack = f_haystack.toLowerCase();
	    var needle = f_needle.toLowerCase();
	    var index = 0;

	    if(f_offset == undefined) {
	        f_offset = 0;
	    }

	    if((index = haystack.indexOf(needle, f_offset)) > -1) {
	        return index;
	    }

	    return false;
	},
	

	defer: function(statics){

		stripos = rhimoo.php.stripos;

	}
});