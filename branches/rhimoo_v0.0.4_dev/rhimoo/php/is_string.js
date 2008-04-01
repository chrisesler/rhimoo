rhimoo.defineClass("rhimoo.php.is_string",
{
	// Find whether the type of a variable is string
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_is_string/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: is_string('23');
    // *     returns 1: true
    // *     example 2: is_string(23.5);
    // *     returns 2: false

  statics : function(mixed_var){
		return (typeof( mixed_var ) == 'string');
	},
	

	defer: function(statics){

		is_string = rhimoo.php.is_string;

	}
});