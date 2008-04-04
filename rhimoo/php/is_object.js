rhimoo.defineClass("rhimoo.php.is_object",
{
	// Finds whether a variable is an object
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_is_object/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Legaev Andrey
    // +   improved by: Michael White (http://crestidg.com)
    // *     example 1: is_object('23');
    // *     returns 1: false
    // *     example 2: is_object({foo: 'bar'});
    // *     returns 2: true
    // *     example 3: is_object(null);
    // *     returns 3: false

  statics : function(mixed_var){
		if(mixed_var instanceof Array) {
	        return false;
	    } else {
	        return (mixed_var !== null) && (typeof( mixed_var ) == 'object');
	    }
	},
	

	defer: function(statics){

		is_object = rhimoo.php.is_object;

	}
});