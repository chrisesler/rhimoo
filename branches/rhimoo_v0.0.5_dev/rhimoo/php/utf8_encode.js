rhimoo.defineClass("rhimoo.php.utf8_encode",
{
	// Encodes an ISO-8859-1 string to UTF-8
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_utf8_encode/
    // +       version: 803.2519
    // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
    // *     example 1: utf8_encode('Kevin van Zonneveld');
    // *     returns 1: 'Kevin van Zonneveld'

  statics : function(str_data){
		str_data = str_data.replace(/\r\n/g,"\n");
	    var utftext = "";

	    for (var n = 0; n < str_data.length; n++) {
	        var c = str_data.charCodeAt(n);
	        if (c < 128) {
	            utftext += String.fromCharCode(c);
	        } else if((c > 127) && (c < 2048)) {
	            utftext += String.fromCharCode((c >> 6) | 192);
	            utftext += String.fromCharCode((c & 63) | 128);
	        } else {
	            utftext += String.fromCharCode((c >> 12) | 224);
	            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
	            utftext += String.fromCharCode((c & 63) | 128);
	        }
	    }

	    return utftext;
	},
	

	defer: function(statics){

		utf8_encode = rhimoo.php.utf8_encode;

	}
});