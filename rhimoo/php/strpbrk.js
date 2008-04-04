rhimoo.defineClass("rhimoo.php.strpbrk",
{
	// Search a string for any of a set of characters
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strpbrk/
    // +       version: 803.2519
    // +   original by: Alfonso JimÃ©nez (http://www.alfonsojimenez.com)
    // *     example 1: strpbrk('This is a Simple text.', 'is');
    // *     returns 1: 'is is a Simple text.'

  statics : function(haystack, char_list){
		var lon = haystack.length;
	    var lon_search = char_list.length;
	    var ret = false;
	    var stack = '';

	    if(lon >= lon_search) {
	        if(lon == lon_search) {
	            if(haystack == char_list){
	                ret = haystack;
	            }
	        } else {
	            j = 0;
	            i = 0;
	            while(i < lon_search && j < lon && !ret) {
	                if(char_list[i] == haystack[j]) {
	                    i++;
	                    if(i == lon_search) ret = true;
	                }
	                j++;
	            }
	            if(ret){
	                for(i = (j-lon_search); i < lon; i++){
	                    stack += haystack[i];
	                }
	            }
	            if(stack != ''){
	                ret = stack;
	            }
	        }
	    }
	    return ret;
	},
	

	defer: function(statics){

		strpbrk = rhimoo.php.strpbrk;

	}
});