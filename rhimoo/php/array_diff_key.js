rhimoo.defineClass("rhimoo.php.array_diff_key",
{

	// Computes the difference of arrays using keys for comparison
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_diff_key/
    // +       version: 803.2519
    // +   original by: Ates Goral (http://magnetiq.com)
    // *     example 1: array_diff_key({red: 1, green: 2, blue: 3, white: 4});
    // *     returns 1: {"red":1, "green":2, "blue":3, "white":4}
    // *     example 2: array_diff_key({red: 1, green: 2, blue: 3, white: 4}, {red: 5});
    // *     returns 2: {"green":2, "blue":3, "white":4}
    // *     example 3: array_diff_key({red: 1, green: 2, blue: 3, white: 4}, {red: 5}, {green: 6, blue: 7});
    // *     returns 3: {"white":4}
    // *     example 4: array_diff_key({red: 1, green: 2, blue: 3, white: 4}, {red: 5}, {red: 5});
    // *     returns 4: {"green":2, "blue":3, "white":4}

  statics : function(object){
		var tpm_ar = new Object(), argc = arguments.length, argv = arguments, key, argidx, other;

	    for (key in object) {
	        tpm_ar[key] = object[key];
	    }
	    for (argidx = 1; argidx < argc; ++argidx) {
	        other = argv[argidx];

	        if (other instanceof Object) {
	            for (key in other) {
	                delete tpm_ar[key];
	            }
	        }
	    }

	    return tpm_ar;
	},
	

	defer: function(statics){
				
		array_diff_key = rhimoo.php.array_diff_key;

	}
});