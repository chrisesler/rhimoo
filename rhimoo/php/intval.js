rhimoo.defineClass("rhimoo.php.intval",
{
	// Get the integer value of a variable
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_intval/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: intval('Kevin van Zonneveld');
    // *     returns 1: 0
    // *     example 2: intval(4.2);
    // *     returns 2: 4
    // *     example 3: intval(42, 8);
    // *     returns 3: 42

  statics : function(mixed_var, base){
		var tmp;

	    if( typeof( mixed_var ) == 'string' ){
	        tmp = parseInt(mixed_var);
	        if(isNaN(tmp)){
	            return 0;
	        } else{
	            return tmp.toString(base || 10);
	        }
	    } else if( typeof( mixed_var ) == 'number' ){
	        return Math.floor(mixed_var);
	    } else{
	        return 0;
	    }
	},
	

	defer: function(statics){

		intval = rhimoo.php.intval;

	}
});