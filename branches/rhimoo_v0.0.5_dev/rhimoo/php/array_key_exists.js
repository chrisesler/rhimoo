rhimoo.defineClass("rhimoo.php.array_key_exists",
{
 	// Checks if the given key or index exists in the array
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_key_exists/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: array_key_exists('kevin', {'kevin': 'van Zonneveld'});
    // *     returns 1: true

  statics : function(key, search){
		// input sanitation
	    if( !search || (search.constructor !== Array && search.constructor !== Object) ){
	        return false;
	    }

	    return search[key] !== undefined;
	},
	

	defer: function(statics){
				
		array_key_exists = rhimoo.php.array_key_exists;

	}
});