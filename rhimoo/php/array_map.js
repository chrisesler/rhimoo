rhimoo.defineClass("rhimoo.php.array_map",
{
	
	// Applies the callback to the elements of the given arrays
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_map/
    // +       version: 803.2519
    // +   original by: Andrea Giammarchi (http://webreflection.blogspot.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: array_map( function(a){return (a * a * a);}, [1, 2, 3, 4, 5] );
    // *     returns 1: [ 1, 8, 27, 64, 125 ]

  statics : function(callback){
		var argc = arguments.length, argv = arguments;
	    var j = argv[1].length, i = 0, k = 1, m = 0;
	    var tmp = [], tmp_ar = [];

	    while (i < j) {
	        while (k < argc){
	            tmp[m++] = argv[k++][i];
	        }

	        m = 0;
	        k = 1;

	        if( callback ){
	            tmp_ar[i++] = callback.apply(null, tmp);
	        } else{
	            tmp_ar[i++] = tmp;
	        }

	        tmp = [];
	    }

	    return tmp_ar;
	},
	

	defer: function(statics){
				
		array_map = rhimoo.php.array_map;

	}
});