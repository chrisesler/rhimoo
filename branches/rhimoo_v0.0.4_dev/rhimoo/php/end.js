rhimoo.defineClass("rhimoo.php.end",
{
	// Set the internal pointer of an array to its last element
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_end/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Legaev Andrey
    // *     example 1: end({firstname: 'Kevin', middle: 'van', surname: 'Zonneveld'});
    // *     returns 1: 'Zonneveld'

  statics : function(array){
		var last_elm, key;

	    if (array.constructor === Array){
	        last_elm = array[(array.length-1)];
	    } else {
	        for (key in array){
	            last_elm = array[key];
	        }
	    }

	    return last_elm;
	},
	

	defer: function(statics){

		end = rhimoo.php.end;

	}
});