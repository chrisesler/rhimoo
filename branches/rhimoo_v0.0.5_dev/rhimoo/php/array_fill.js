rhimoo.defineClass("rhimoo.php.array_fill",
{

	// Fill an array with values
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_fill/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: _argos
    // *     example 1: array_fill(5, 6, 'banana');
    // *     returns 1: { 5: 'banana', 6: 'banana', 7: 'banana', 8: 'banana', 9: 'banana', 10: 'banana' }

  statics : function(start_index, num, mixed_val){
		var key, tmp_arr = new Array();

	    if ( !isNaN ( start_index ) && !isNaN ( num ) ) {
	        for( key = start_index; key <= num; key++ ) {
	            tmp_arr[key] = mixed_val;
	        }
	    }

	    return tmp_arr;
	},
	

	defer: function(statics){

		array_fill = rhimoo.php.array_fill;

	}
});