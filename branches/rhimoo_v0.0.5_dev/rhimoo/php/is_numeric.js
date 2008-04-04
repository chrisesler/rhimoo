rhimoo.defineClass("rhimoo.php.is_numeric",
{
	// Finds whether a variable is a number or a numeric string
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_is_numeric/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: David
    // *     example 1: is_numeric(186.31);
    // *     returns 1: true
    // *     example 2: is_numeric('Kevin van Zonneveld');
    // *     returns 2: false
    // *     example 3: is_numeric('+186.31e2');
    // *     returns 3: true

  statics : function(mixed_var){
		return !isNaN( mixed_var );
	},
	

	defer: function(statics){

		is_numeric = rhimoo.php.is_numeric;

	}
});