rhimoo.defineClass("rhimoo.php.array_shift",
{

	// Shift an element off the beginning of array
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_shift/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: array_shift(['Kevin', 'van', 'Zonneveld']);
    // *     returns 1: 'Kevin'

  statics : function(array){
		var i=0, first_elm=null, cnt=0, tmp_arr = {};

	    // input sanitation
	    if( !array || (array.constructor !== Array && array.constructor !== Object) || !array.length ){
	        return null;
	    }

	    if( array.constructor === Array ){
	        first_elm = array[0];
	        for( i = 0; i < array.length; i++ ){
	            array[i] = array[i+1];
	        }
	        array.length--;
	    } else if( array.constructor === Object ){
	        for(var key in array){
	            if( cnt == 0 ){
	                first_elm = array[key];
	            } else{
	                tmp_arr[key] = array[key];
	            }
	            cnt ++;
	        }
	        array = tmp_arr;
	    }

	    return first_elm;
	},
	

	defer: function(statics){
				
		array_shift = rhimoo.php.array_shift;

	}
});