rhimoo.defineClass("rhimoo.php.strtoupper",
{
	// Make a string uppercase
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strtoupper/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: strtoupper('Kevin van Zonneveld');
    // *     returns 1: 'KEVIN VAN ZONNEVELD'

  statics : function(str){
		return str.toUpperCase();
	},
	

	defer: function(statics){

		strtoupper = rhimoo.php.strtoupper;

	}
});