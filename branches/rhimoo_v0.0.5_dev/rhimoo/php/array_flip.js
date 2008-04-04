rhimoo.defineClass("rhimoo.php.array_flip",
{

	// Exchanges all keys with their associated values in an array
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_flip/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: array_flip( {a: 1, b: 1, c: 2} );
    // *     returns 1: {1: 'b', 2: 'c'}

  statics : function(trans){
		var key, tmp_ar = {};

	    for( key in trans ) {
	        tmp_ar[trans[key]] = key;
	    }

	    return tmp_ar;
	},
	

	defer: function(statics){
				
		array_flip = rhimoo.php.array_flip;

	}
});