rhimoo.defineClass("rhimoo.php.array_reduce",
{

	// Iteratively reduce the array to a single value using a callback function
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_reduce/
    // +       version: 803.2519
    // +   original by: Alfonso JimÃ©nez (http://www.alfonsojimenez.com)
    // *     example 1: array_reduce([1, 2, 3, 4, 5], function(v, w){v += w; return v;});
    // *     returns 1: 15

  statics : function(a_input, callback){
		var lon = a_input.length;
	    var res = 0;
	    var tmp = new Array();

	    for(i = 0; i < lon; i += 2) {
	        tmp[0] = a_input[i];
	        if(a_input[i+1]){
	            tmp[1] = a_input[i+1];
	        } else {
	            tmp[1] = 0;
	        }
	        res += callback.apply(null, tmp);
	        tmp = new Array();
	    }

	    return res;
	},
	

	defer: function(statics){
				
		array_reduce = rhimoo.php.array_reduce;

	}
});