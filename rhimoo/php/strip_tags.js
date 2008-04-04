rhimoo.defineClass("rhimoo.php.strip_tags",
{
	// Strip HTML and PHP tags from a string
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strip_tags/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: strip_tags('Kevin <br />van <i>Zonneveld</i>');
    // *     returns 1: 'Kevin van Zonneveld'

  statics : function(str){
		return str.replace(/<\/?[^>]+>/gi, '');
	},
	

	defer: function(statics){

		strip_tags = rhimoo.php.strip_tags;

	}
});