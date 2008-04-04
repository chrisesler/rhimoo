rhimoo.defineClass("rhimoo.php.stristr",
{
	// Case-insensitive strstr()
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_stristr/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: stristr('Kevin van Zonneveld', 'Van');
    // *     returns 1: 'van Zonneveld'
    // *     example 2: stristr('Kevin van Zonneveld', 'VAN', true);
    // *     returns 2: 'Kevin '

  statics : function(haystack, needle, boo){
		var pos = 0;

	    pos = haystack.toLowerCase().indexOf( needle.toLowerCase() );
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

		stristr = rhimoo.php.stristr;

	}
});