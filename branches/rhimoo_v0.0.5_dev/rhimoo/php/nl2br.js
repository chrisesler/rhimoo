rhimoo.defineClass("rhimoo.php.nl2br",
{
	// Inserts HTML line breaks before all newlines in a string
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_nl2br/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: nl2br('Kevin\nvan\nZonneveld');
    // *     returns 1: 'Kevin<br/>van<br/>Zonneveld'

  statics : function(str){
		return str.replace(/([^>])\n/g, '$1<br/>');
	},
	

	defer: function(statics){

		nl2br = rhimoo.php.nl2br;

	}
});