rhimoo.defineClass("rhimoo.php.isset",
{
	// Determine whether a variable is set
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_isset/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: isset( undefined, true);
    // *     returns 1: false
    // *     example 2: isset( 'Kevin van Zonneveld' );
    // *     returns 2: true

  statics : function(mixed_var){
		var i = 0, argc = arguments.length, argv = arguments, set=true;

	    for (i = 0; i< argc; i++){
	        if( argv[i] == undefined ){
	            set = false;
	            break;
	        }
	    }

	    return set;
	},
	

	defer: function(statics){

		isset = rhimoo.php.isset;

	}
});