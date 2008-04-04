rhimoo.defineClass("rhimoo.php.chr",
{
	// Return a specific character
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_chr/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: chr(75);
    // *     returns 1: 'K'

  statics : function(ascii){
		return String.fromCharCode(ascii);
	},
	

	defer: function(statics){

		chr = rhimoo.php.chr;

	}
});