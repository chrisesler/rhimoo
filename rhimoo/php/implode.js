rhimoo.defineClass("rhimoo.php.implode",
{
	// Join array elements with a string
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_implode/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: _argos
    // *     example 1: implode(' ', ['Kevin', 'van', 'Zonneveld']);
    // *     returns 1: 'Kevin van Zonneveld'

  statics : function(glue, pieces){
		return ( ( pieces instanceof Array ) ? pieces.join ( glue ) : pieces );
	},
	

	defer: function(statics){

		implode = rhimoo.php.implode;

	}
});