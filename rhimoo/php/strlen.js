rhimoo.defineClass("rhimoo.php.strlen",
{
	// Get string length
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strlen/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: strlen('Kevin van Zonneveld');
    // *     returns 1: 19

  statics : function(string){
		return string.length;
	},
	

	defer: function(statics){

		strlen = rhimoo.php.strlen;

	}
});