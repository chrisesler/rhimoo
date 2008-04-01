rhimoo.defineClass("rhimoo.php.ucfirst",
{
	// Make a string&#039;s first character uppercase
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_ucfirst/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: ucfirst('kevin van zonneveld');
    // *     returns 1: 'Kevin van zonneveld'

  statics : function(str){
		var f = str.charAt(0).toUpperCase();
	    return f + str.substr(1, str.length-1);
	},
	

	defer: function(statics){

		ucfirst = rhimoo.php.ucfirst;

	}
});