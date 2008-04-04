rhimoo.defineClass("rhimoo.php.defined",
{
	// Checks whether a given named constant exists
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_defined/
    // +       version: 803.2519
    // +   original by: _argos
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: defined('IMAGINARY_CONSTANT1');
    // *     returns 1: false

  statics : function(constant_name){
		//return (typeof window[constant_name] !== 'undefined');
		return (typeof constant_name !== 'undefined');
	},
	

	defer: function(statics){

		defined = rhimoo.php.defined;

	}
});