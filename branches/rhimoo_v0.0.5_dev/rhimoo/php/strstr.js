rhimoo.defineClass("rhimoo.php.strstr",
{
	// Find first occurrence of a string
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strstr/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: strstr('Kevin van Zonneveld', 'van');
    // *     returns 1: 'van Zonneveld'
    // *     example 2: strstr('Kevin van Zonneveld', 'van', true);
    // *     returns 2: 'Kevin '

  statics : function(haystack, needle, bool){
		var pos = 0;

	    pos = haystack.indexOf( needle );
	    if( pos == -1 ){
	        return false;
	    } else{
	        if( bool ){
	            return haystack.substr( 0, pos );
	        } else{
	            return haystack.slice( pos );
	        }
	    }
	},
	

	defer: function(statics){

		strstr = rhimoo.php.strstr;

	}
});