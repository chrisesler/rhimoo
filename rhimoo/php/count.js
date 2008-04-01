rhimoo.defineClass("rhimoo.php.count",
{
	// Count elements in an array, or properties in an object
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_count/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: _argos
    // *     example 1: count([[0,0],[0,-4]], 'COUNT_RECURSIVE');
    // *     returns 1: 6
    // *     example 2: count({'one' : [1,2,3,4,5]}, 'COUNT_RECURSIVE');
    // *     returns 2: 6

  statics : function(mixed_var, mode){
		var key, cnt = 0;

	    if( mode == 'COUNT_RECURSIVE' ) mode = 1;
	    if( mode != 1 ) mode = 0;

	    for (key in mixed_var){
	        cnt++;
	        if( mode==1 && mixed_var[key] && (mixed_var[key].constructor === Array || mixed_var[key].constructor === Object) ){
	            cnt += count(mixed_var[key], 1);
	        }
	    }

	    return cnt;
	},
	

	defer: function(statics){

		count = rhimoo.php.count;

	}
});