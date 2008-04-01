rhimoo.defineClass("rhimoo.php.count_chars",
{
	// Return information about characters used in a string
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_count_chars/
    // +       version: 803.2519
    // +   original by: Ates Goral (http://magnetiq.com)
    // *     example 1: count_chars("Hello World!", 3);
    // *     returns 1: "Helo Wrd!"

  statics : function(str, mode){
		var histogram = new Object(), tmp_ar = new Array(), argc = arguments.length, key, i, code, mode;

	    if (argc == 1) {
	        mode = 0;
	    }

	    mode_even = (mode & 1) == 0;
	    if (mode_even) {
	        for (i = 1; i < 256; ++i) {
	            histogram[i] = 0;
	        }
	    }

	    for (i = 0; i < str.length; ++i) {
	        code = str.charCodeAt(i);
	        if (code in histogram) {
	            ++histogram[code];
	        } else {
	            histogram[code] = 1;
	        }
	    }

	    if (mode > 0) {
	        for (key in histogram) {
	            if (histogram[key] == 0 != mode_even) {
	                delete histogram[key];
	            }
	        }
	    }

	    if (mode < 3) {
	        return histogram;
	    } else {
	        for (key in histogram) {
	            tmp_ar.push(String.fromCharCode(key));
	        }
	        return tmp_ar.join("");
	    }
	},
	

	defer: function(statics){

		count_chars = rhimoo.php.count_chars;

	}
});