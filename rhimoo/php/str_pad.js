rhimoo.defineClass("rhimoo.php.str_pad",
{
	// Pad a string to a certain length with another string
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_str_pad/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // + namespaced by: Michael White (http://crestidg.com)
    // *     example 1: str_pad('Kevin van Zonneveld', 30, '-=', 'STR_PAD_LEFT');
    // *     returns 1: '-=-=-=-=-=-Kevin van Zonneveld'
    // *     example 2: str_pad('Kevin van Zonneveld', 30, '-', 'STR_PAD_BOTH');
    // *     returns 2: '------Kevin van Zonneveld-----'

  statics : function(input, pad_length, pad_string, pad_type){
		var half = '', pad_to_go;

	    var str_pad_repeater = function(s, len){
	            var collect = '', i;

	            while(collect.length < len) collect += s;
	            collect = collect.substr(0,len);

	            return collect;
	        };

	    if (pad_type != 'STR_PAD_LEFT' && pad_type != 'STR_PAD_RIGHT' && pad_type != 'STR_PAD_BOTH') { pad_type = 'STR_PAD_RIGHT'; }
	    if ((pad_to_go = pad_length - input.length) > 0) {
	        if (pad_type == 'STR_PAD_LEFT') { input = str_pad_repeater(pad_string, pad_to_go) + input; }
	        else if (pad_type == 'STR_PAD_RIGHT') { input = input + str_pad_repeater(pad_string, pad_to_go); }
	        else if (pad_type == 'STR_PAD_BOTH') {
	            half = str_pad_repeater(pad_string, Math.ceil(pad_to_go/2));
	            input = half + input + half;
	            input = input.substr(0, pad_length);
	        }
	    }

	    return input;
	},
	

	defer: function(statics){

		str_pad = rhimoo.php.str_pad;

	}
});