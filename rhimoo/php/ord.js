rhimoo.defineClass("rhimoo.php.ord",
{
	// Return ASCII value of character
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_ord/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: ord('K');
    // *     returns 1: 75

  statics : function(string){
		return string.charCodeAt(0);
	},
	

	defer: function(statics){

		ord = rhimoo.php.ord;

	}
});