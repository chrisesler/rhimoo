rhimoo.defineClass("rhimoo.php.bin2hex",
{
	// Convert binary data into hexadecimal representation
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_bin2hex/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: bin2hex('Kev');
    // *     returns 1: '4b6576'

  statics : function(s){
		var i, f = s.length, a = [];
	    for(i = 0; i<f; i++){
	        a[i] = s.charCodeAt(i).toString(16);
	    }
	    return a.join('');
	},
	

	defer: function(statics){

		bin2hex = rhimoo.php.bin2hex;

	}
});