rhimoo.defineClass("rhimoo.php.array_values",
{

	// Return all the values of an array
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_values/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: array_values( {firstname: 'Kevin', surname: 'van Zonneveld'} );
    // *     returns 1: {0: 'Kevin', 1: 'van Zonneveld'}

  statics : function(input){
		var tmp_arr = new Array(), cnt = 0;

	    for ( key in input ){
	        tmp_arr[cnt] = input[key];
	        cnt++;
	    }

	    return tmp_arr;
	},
	

	defer: function(statics){
				
		array_values = rhimoo.php.array_values;

	}
});