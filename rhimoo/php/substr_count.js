rhimoo.defineClass("rhimoo.php.substr_count",
{
	// Count the number of substring occurrences
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_substr_count/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: substr_count('Kevin van Zonneveld', 'e');
    // *     returns 1: 3
    // *     example 2: substr_count('Kevin van Zonneveld', 'K', 1);
    // *     returns 2: 0
    // *     example 3: substr_count('Kevin van Zonneveld', 'Z', 0, 10);
    // *     returns 3: false

  statics : function(haystack, needle, offset, length){
		var pos = 0, cnt = 0;

	    if(isNaN(offset)) offset = 0;
	    if(isNaN(length)) length = 0;
	    offset--;

	    while( (offset = haystack.indexOf(needle, offset+1)) != -1 ){
	        if(length > 0 && (offset+needle.length) > length){
	            return false;
	        } else{
	            cnt++;
	        }
	    }

	    return cnt;
	},
	

	defer: function(statics){

		substr_count = rhimoo.php.substr_count;

	}
});