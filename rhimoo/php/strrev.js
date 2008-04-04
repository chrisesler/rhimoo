rhimoo.defineClass("rhimoo.php.strrev",
{
	// Reverse a string
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strrev/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: strrev('Kevin van Zonneveld');
    // *     returns 1: 'dlevennoZ nav niveK'

  statics : function(string){
		var ret = '', i = 0;

	    for ( i = string.length-1; i >= 0; i-- ){
	       ret += string.charAt(i);
	    }

	    return ret;
	},
	

	defer: function(statics){

		strrev = rhimoo.php.strrev;

	}
});