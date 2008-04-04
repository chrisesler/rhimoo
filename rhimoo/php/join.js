rhimoo.defineClass("rhimoo.php.join",
{
	// Alias of implode()
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_join/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // -    depends on: implode
    // *     example 1: join(' ', ['Kevin', 'van', 'Zonneveld']);
    // *     returns 1: 'Kevin van Zonneveld'

  statics : function(glue, pieces){
		// Alias of rhimoo.php.implode()
		return rhimoo.php.implode( glue, pieces );
	},
	

	defer: function(statics){

		join = rhimoo.php.join;

	}
});