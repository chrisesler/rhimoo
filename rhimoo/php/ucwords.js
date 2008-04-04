rhimoo.defineClass("rhimoo.php.ucwords",
{
	// Uppercase the first character of each word in a string
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_ucwords/
    // +       version: 803.2519
    // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   improved by: _argos
    // *     example 1: ucwords('kevin van zonneveld');
    // *     returns 1: 'Kevin Van Zonneveld'

  statics : function(str){
		return str.replace(/^(.)|\s(.)/g, function ( $1 ) { return $1.toUpperCase ( ); } );
	},
	

	defer: function(statics){

		ucwords = rhimoo.php.ucwords;

	}
});