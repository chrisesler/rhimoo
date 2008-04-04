rhimoo.defineClass("rhimoo.php.stripslashes",
{
	// Un-quote string quoted with addslashes()
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_stripslashes/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Ates Goral (http://magnetiq.com)
    // +      fixed by: Mick@el
    // +   improved by: marrtins
    // *     example 1: stripslashes('Kevin\'s code');
    // *     returns 1: "Kevin's code"

  statics : function(str){
		return str.replace('/\0/g', '0').replace('/\(.)/g', '$1');
	},
	

	defer: function(statics){

		stripslashes = rhimoo.php.stripslashes;

	}
});