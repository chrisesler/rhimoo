rhimoo.defineClass("rhimoo.php.function_exists",
{
	// Return TRUE if the given function has been defined
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_function_exists/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Steve Clay
    // +   improved by: Legaev Andrey
    // *     example 1: function_exists('isFinite');
    // *     returns 1: true

  statics : function(function_name){
		//if (typeof function_name == 'string'){
	    //    return (typeof window[function_name] == 'function');
	    //} else{
	        return (function_name instanceof Function);
	    //}
	},
	

	defer: function(statics){

		function_exists = rhimoo.php.function_exists;

	}
});