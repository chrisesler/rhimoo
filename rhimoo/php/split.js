rhimoo.defineClass("rhimoo.php.split",
{
	// Split string into array by regular expression
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_split/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // -    depends on: explode
    // *     example 1: split(' ', 'Kevin van Zonneveld');
    // *     returns 1: {0: 'Kevin', 1: 'van', 2: 'Zonneveld'}

  statics : function(delimiter, string){
		return rhimoo.php.explode( delimiter, string );
	},
	

	defer: function(statics){

		split = rhimoo.php.split;

	}
});