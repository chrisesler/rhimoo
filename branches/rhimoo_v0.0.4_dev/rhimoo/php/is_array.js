rhimoo.defineClass("rhimoo.php.is_array",
{
	// Finds whether a variable is an array
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_is_array/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Legaev Andrey
    // +   bugfixed by: Cord
    // *     example 1: is_array(['Kevin', 'van', 'Zonneveld']);
    // *     returns 1: true
    // *     example 2: is_array('Kevin van Zonneveld');
    // *     returns 2: false

  statics : function(mixed_var){
		return ( mixed_var instanceof Array );
	},
	

	defer: function(statics){

		is_array = rhimoo.php.is_array;

	}
});