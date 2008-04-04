rhimoo.defineClass("rhimoo.php.basename",
{
	// Returns filename component of path
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_basename/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Ash Searle (http://hexmen.com/blog/)
    // +   improved by: Lincoln Ramsay
    // +   improved by: djmix
    // *     example 1: basename('/www/site/home.htm', '.htm');
    // *     returns 1: 'home'

  statics : function(path, suffix){
		var b = path.replace(/^.*[\/\\]/g, '');
	    if (typeof(suffix) == 'string' && b.substr(b.length-suffix.length) == suffix) {
	        b = b.substr(0, b.length-suffix.length);
	    }
	    return b;
	},
	

	defer: function(statics){

		basename = rhimoo.php.basename;

	}
});