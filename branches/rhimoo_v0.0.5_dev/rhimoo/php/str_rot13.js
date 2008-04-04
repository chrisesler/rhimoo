rhimoo.defineClass("rhimoo.php.str_rot13",
{
	// Perform the rot13 transform on a string
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_str_rot13/
    // +       version: 803.2519
    // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   improved by: Ates Goral (http://magnetiq.com)
    // *     example 1: str_rot13('Kevin van Zonneveld');
    // *     returns 1: 'Xriva ina Mbaariryq'
    // *     example 2: str_rot13('Xriva ina Mbaariryq');
    // *     returns 2: 'Kevin van Zonneveld'

  statics : function(search, replace, subject){
		return str.replace(/[A-Za-z]/g, function (c) {
	        return String.fromCharCode((((c = c.charCodeAt(0)) & 223) - 52) % 26 + (c & 32) + 65);
	    });
	},
	

	defer: function(statics){

		str_rot13 = rhimoo.php.str_rot13;

	}
});