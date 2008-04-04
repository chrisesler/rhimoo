rhimoo.defineClass("rhimoo.php.reset",
{
	// Set the internal pointer of an array to its first element
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_reset/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Legaev Andrey
    // *     example 1: reset({firstname: 'Kevin', middle: 'van', surname: 'Zonneveld'});
    // *     returns 1: 'Kevin'

  statics : function(array){
		var first_elm, key;

	    if (array.constructor === Array){
	        first_elm = array[0];
	    } else {
	        for (key in array){
	            first_elm = array[key];
	            break;
	        }
	    }

	    return first_elm;
	},
	

	defer: function(statics){

		reset = rhimoo.php.reset;

	}
});