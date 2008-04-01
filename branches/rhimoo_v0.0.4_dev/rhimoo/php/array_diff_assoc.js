rhimoo.defineClass("rhimoo.php.array_diff_assoc",
{

	// Computes the difference of arrays with additional index check
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_diff_assoc/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: array_diff_assoc({0: 'Kevin', 1: 'van', 2: 'Zonneveld'}, {0: 'Kevin', 4: 'van', 5: 'Zonneveld'});
    // *     returns 1: {1: 'van', 2: 'Zonneveld'}

  statics : function(array){
		var arr_dif = {}, i = 1, argc = arguments.length, argv = arguments, key, key_c, found=false;

	    // input sanitation
	    if( !array || (array.constructor !== Array && array.constructor !== Array && typeof array != 'object' && typeof array != 'array') ){
	        return null;
	    }

	    // loop through 1st array
	    for ( key in array ){
	        // loop over other arrays
	        for (i = 1; i< argc; i++){
	            // find in the compare array
	            found = false;
	            if(argv[i][key]){
	                found = true;
	                break;
	            }

	            if(!found){
	                arr_dif[key] = array[key];
	            }
	        }
	    }

	    return arr_dif;
	},
	

	defer: function(statics){
		
		array_diff_assoc = rhimoo.php.array_diff_assoc;

	}
});