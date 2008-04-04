rhimoo.defineClass("rhimoo.php.empty",
{
	// Determine whether a variable is empty
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_empty/
    // +       version: 803.2519
    // +   original by: Philippe Baumann
    // *     example 1: empty(null);
    // *     returns 1: true

  statics : function(mixed_var){
		return ( mixed_var === "" || mixed_var === 0   || mixed_var === "0" || mixed_var === null  || mixed_var === false  ||  ( is_array(mixed_var) && mixed_var.length === 0 ) );
	},
	

	defer: function(statics){

		empty = rhimoo.php.empty;

	}
});