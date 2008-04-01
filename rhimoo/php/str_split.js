rhimoo.defineClass("rhimoo.php.str_split",
{
	// Convert a string to an array
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_str_split/
    // +       version: 803.2519
    // +     original by: Martijn Wieringa
    // *         example 1: str_split('Hello Friend', 3);
    // *         returns 1: ['Hel', 'lo ', 'Fri', 'end']

  statics : function(f_string, f_split_length, f_backwards){
		if(f_backwards == undefined) {
	        f_backwards = false;
	    }

	    if(f_split_length > 0){
	        var result = new Array();

	        if(f_backwards) {
	            var r = (f_string.length % f_split_length);

	            if(r > 0){
	                result[result.length] = f_string.substring(0, r);
	                f_string = f_string.substring(r);
	            }
	        }

	        while(f_string.length > f_split_length) {
	            result[result.length] = f_string.substring(0, f_split_length);
	            f_string = f_string.substring(f_split_length);
	        }

	        result[result.length] = f_string;
	        return result;
	    }

	    return false;
	},
	

	defer: function(statics){

		str_split = rhimoo.php.str_split;

	}
});