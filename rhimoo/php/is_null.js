rhimoo.defineClass("rhimoo.php.is_null",
{
	// Finds whether a variable is NULL
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_is_null/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: is_null('23');
    // *     returns 1: false
    // *     example 2: is_null(null);
    // *     returns 2: true

  statics : function(mixed_var){
		return ( mixed_var === null );
	},
	

	defer: function(statics){

		is_null = rhimoo.php.is_null;

	}
});