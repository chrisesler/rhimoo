rhimoo.defineClass("rhimoo.php.array_sum",
{

	// Calculate the sum of values in an array
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_sum/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: array_sum([4, 9, 182.6]);
    // *     returns 1: 195.6

  statics : function(array){
		var key, sum=0;

	    // input sanitation
	    if( !array || (array.constructor !== Array && array.constructor !== Object) || !array.length ){
	        return null;
	    }

	    for(var key in array){
	        sum += array[key];
	    }

	    return sum;
	},
	

	defer: function(statics){
				
		array_sum = rhimoo.php.array_sum;

	}
});