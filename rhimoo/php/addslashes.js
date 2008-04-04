rhimoo.defineClass("rhimoo.php.addslashes",
{

	// Quote string with slashes
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_addslashes/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Ates Goral (http://magnetiq.com)
    // +   improved by: marrtins
    // *     example 1: addslashes("kevin's birthday");
    // *     returns 1: "kevin\'s birthday"

  statics : function(str){
		return str.replace('/(["\'\])/g', "\\$1").replace('/\0/g', "\\0");
	},
	

	defer: function(statics){
	
		addslashes = rhimoo.php.addslashes;

	}
});