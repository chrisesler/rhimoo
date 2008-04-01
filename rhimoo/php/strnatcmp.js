rhimoo.defineClass("rhimoo.php.strnatcmp",
{
	// String comparisons using a &quot;natural order&quot; algorithm
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strnatcmp/
    // +       version: 803.2519
    // +   original by: Martijn Wieringa
    // + namespaced by: Michael White (http://crestidg.com)
    // -    depends on: strcmp
    // *     example 1: strnatcmp('Price 12.9', 'Price 12.15');
    // *     returns 1: 1
    // *     example 2: strnatcmp('Version 12.9', 'Version 12.15', true);
    // *     returns 2: -6
    // *     example 3: strnatcmp('Version 12.9', 'Version 12.15', false);
    // *     returns 3: 1

  statics : function(f_string1, f_string2, f_version){
		if(f_version == undefined) {
	        f_version = false;
	    }

	    var __strnatcmp_split = function( f_string ) {
	            var result = new Array();
	            var buffer = '';
	            var chr = '';

	            var text = true;

	            for(var i = 0; i < f_string.length; i++){
	                chr = f_string.substring(i, i + 1);

	                if(chr.match(/[0-9]/)){
	                    if(text){
	                        if(buffer.length > 0){
	                            result[result.length] = buffer;
	                            buffer = '';
	                        }

	                        text = false;
	                    }
	                    buffer += chr;
	                } else if((text == false) && (chr == '.') && (i < (f_string.length - 1)) && (f_string.substring(i + 1, i + 2).match(/[0-9]/))) {
	                    result[result.length] = buffer;
	                    buffer = '';
	                } else {
	                    if(text == false) {
	                        if(buffer.length > 0) {
	                            result[result.length] = parseInt(buffer);
	                            buffer = '';
	                        }
	                        text = true;
	                    }
	                    buffer += chr;
	                }
	            }

	            if(buffer.length > 0) {
	                if(text) {
	                    result[result.length] = buffer;
	                } else {
	                    result[result.length] = parseInt(buffer);
	                }
	            }

	            return result;
	        };

	    var array1 = __strnatcmp_split(f_string1);
	    var array2 = __strnatcmp_split(f_string2);

	    var len = array1.length;
	    var text = true;

	    var result = -1;
	    var r = 0;

	    if(len > array2.length) {
	        len = array2.length;
	        result = 1;
	    }

	    for(i = 0; i < len; i++) {
	        if(isNaN(array1[i])) {
	            if(isNaN(array2[i])){
	                text = true;

	                if((r = strcmp(array1[i], array2[i])) != 0) {
	                    return r;
	                }
	            }
	            else if(text){
	                return 1;
	            } else {
	                return -1;
	            }
	        } else if(isNaN(array2[i])){
	            if(text) {
	                return -1;
	            } else{
	                return 1;
	            }
	        }else  {
	            if(text || f_version){
	                if((r = (array1[i] - array2[i])) != 0){
	                    return r;
	                }
	            } else {
	                if((r = strcmp(array1[i].toString(), array2[i].toString())) != 0) {
	                    return r;
	                }
	            }

	            text = false;
	        }
	    }

	    return result;
	},
	

	defer: function(statics){

		strnatcmp = rhimoo.php.strnatcmp;

	}
});