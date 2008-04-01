rhimoo.defineClass("rhimoo.php.array_combine",
{

	// Creates an array by using one array for keys and another for its values
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_combine/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: array_combine([0,1,2], ['kevin','van','zonneveld']);
    // *     returns 1: {0: 'kevin', 1: 'van', 2: 'zonneveld'}

  statics : function(keys,values){
		var new_array = {}, keycount=keys.length, i;

	    // input sanitation
	    if( !keys || !values || keys.constructor !== Array || values.constructor !== Array ){
	        return false;
	    }

	    // number of elements does not match
	    if(keycount != values.length){
	        return false;
	    }

	    for ( i=0; i < keycount; i++ ){
	        new_array[keys[i]] = values[i];
	    }

	    return new_array;
	},
	

	defer: function(statics){

		array_combine = rhimoo.php.array_combine;

	}
});