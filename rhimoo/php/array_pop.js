rhimoo.defineClass("rhimoo.php.array_pop",
{

	// Pop the element off the end of array
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_pop/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: array_pop([0,1,2]);
    // *     returns 1: 2

  statics : function(array){
		// done popping, are we?
	    if( !array.length ){
	        return null;
	    }

	    return array.pop();
	},
	

	defer: function(statics){
				
		array_pop = rhimoo.php.array_pop;

	}
});