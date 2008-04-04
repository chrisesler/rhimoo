rhimoo.defineClass("rhimoo.php.strcasecmp",
{
	// Binary safe case-insensitive string comparison
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strcasecmp/
    // +       version: 803.2519
    // +     original by: Martijn Wieringa
    // *         example 1: strcasecmp('Hello', 'hello');
    // *         returns 1: 0

  statics : function(f_string1, f_string2){
		var string1 = f_string1.toLowerCase();
	    var string2 = f_string2.toLowerCase();

	    if(string1 > string2) {
	      return 1;
	    }
	    else if(string1 == string2) {
	      return 0;
	    }

	    return -1;
	},
	

	defer: function(statics){

		strcasecmp = rhimoo.php.strcasecmp;

	}
});