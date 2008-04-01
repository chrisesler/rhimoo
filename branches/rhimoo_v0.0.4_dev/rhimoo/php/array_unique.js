rhimoo.defineClass("rhimoo.php.array_unique",
{

	// Removes duplicate values from an array
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_unique/
    // +       version: 803.2519
    // +   original by: Carlos R. L. Rodrigues
    // *     example 1: array_unique(['Kevin','Kevin','van','Zonneveld']);
    // *     returns 1: true

  statics : function(array){
		var p, i, j;
	    for(i = array.length; i;){
	        for(p = --i; p > 0;){
	            if(array[i] === array[--p]){
	                for(j = p; --p && array[i] === array[p];);
	                i -= array.splice(p + 1, j - p).length;
	            }
	        }
	    }

	    return true;
	},
	

	defer: function(statics){
				
		array_unique = rhimoo.php.array_unique;

	}
});