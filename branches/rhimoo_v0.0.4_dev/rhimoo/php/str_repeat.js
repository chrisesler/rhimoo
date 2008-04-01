rhimoo.defineClass("rhimoo.php.str_repeat",
{
	// Repeat a string
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_str_repeat/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: str_repeat('-=', 10);
    // *     returns 1: '-=-=-=-=-=-=-=-=-=-='

  statics : function(input, multiplier){
		var buf = '';

	    for (i=0; i < multiplier; i++){
	        buf += input;
	    }

	    return buf;
	},
	

	defer: function(statics){

		str_repeat = rhimoo.php.str_repeat;

	}
});