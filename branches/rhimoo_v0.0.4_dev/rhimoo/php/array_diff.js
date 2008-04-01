rhimoo.defineClass("rhimoo.php.array_diff",
{

	// Computes the difference of arrays
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_diff/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Sanjoy Roy
    // *     example 1: array_diff(['Kevin', 'van', 'Zonneveld'], ['van', 'Zonneveld']);
    // *     returns 1: ['Kevin']

  statics : function(array){
		var arr_dif = [], i = 1, argc = arguments.length, argv = arguments, key, key_c, found=false, cntr=0;

	    // loop through 1st array
	    for ( key in array ){
	        // loop over other arrays
	        for (i = 1; i< argc; i++){
	            // find in the compare array
	            found = false;
	            for (key_c in argv[i]) {
	                if (argv[i][key_c] == array[key]) {
	                    found = true;
	                    break;
	                }
	            }

	            if(!found){
	                //arr_dif[key] = array[key];
	                arr_dif[cntr] = array[key];
	                cntr++;
	            }
	        }
	    }

	    return arr_dif;
	},
	

	defer: function(statics){

		array_diff = rhimoo.php.array_diff;

	}
});