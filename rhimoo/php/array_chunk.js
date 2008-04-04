rhimoo.defineClass("rhimoo.php.array_chunk",
{

	// Split an array into chunks
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_chunk/
    // +       version: 803.2519
    // +   original by: Carlos R. L. Rodrigues
    // *     example 1: array_chunk(['Kevin', 'van', 'Zonneveld'], 2);
    // *     returns 1: {0 : {0: 'Kevin', 1: 'van'} , 1 : {0: 'Zonneveld'}}

  statics : function(input,size){
		for(var x, i = 0, c = -1, l = input.length, n = []; i < l; i++){
	        (x = i % size) ? n[c][x] = input[i] : n[++c] = [input[i]];
	    }

	    return n;
	},
	

	defer: function(statics){

		array_chunk = rhimoo.php.array_chunk;

	}
});