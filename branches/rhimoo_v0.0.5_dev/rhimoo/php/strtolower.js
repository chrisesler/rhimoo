rhimoo.defineClass("rhimoo.php.strtolower",
{
	// Make a string lowercase
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strtolower/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: strtolower('Kevin van Zonneveld');
    // *     returns 1: 'kevin van zonneveld'

  statics : function(str){
		return str.toLowerCase();
	},
	

	defer: function(statics){

		strtolower = rhimoo.php.strtolower;

	}
});