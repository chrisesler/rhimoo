rhimoo.defineClass("rhimoo.php.array_reverse",
{

	// Return an array with elements in reverse order
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_reverse/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Karol Kowalski
    // *     example 1: array_reverse( [ 'php', '4.0', ['green', 'red'] ], true );
    // *     returns 1: { 2: ['green', 'red'], 1: 4, 0: 'php'}

  statics : function(array, preserve_keys){
		var arr_len=array.length, newkey=0, tmp_ar = {}

	    for(var key in array){
	        newkey=arr_len-key-1;
	        tmp_ar[(!!preserve_keys)?newkey:key]=array[newkey];
	    }

	    return tmp_ar;
	},
	

	defer: function(statics){
				
		array_reverse = rhimoo.php.array_reverse;

	}
});