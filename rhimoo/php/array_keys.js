rhimoo.defineClass("rhimoo.php.array_keys",
{

	// Return all the keys of an array
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_keys/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: array_keys( {firstname: 'Kevin', surname: 'van Zonneveld'} );
    // *     returns 1: {0: 'firstname', 1: 'surname'}

  statics : function(input, search_value, strict){
		var tmp_arr = new Array(), strict = !!strict, include = true, cnt = 0;

	    for ( key in input ){
	        include = true;
	        if ( search_value != undefined ) {
	            if( strict && input[key] !== search_value ){
	                include = false;
	            } else if( input[key] != search_value ){
	                include = false;
	            }
	        }

	        if( include ) {
	            tmp_arr[cnt] = key;
	            cnt++;
	        }
	    }

	    return tmp_arr;
	},
	

	defer: function(statics){
				
		array_keys = rhimoo.php.array_keys;

	}
});