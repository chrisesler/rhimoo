rhimoo.defineClass("rhimoo.php.array_push",
{

	// Push one or more elements onto the end of array
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_push/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: array_push(['kevin','van'], 'zonneveld');
    // *     returns 1: 3

  statics : function(array){
		var i, argv = arguments, argc = argv.length;

	    for (i=1; i < argc; i++){
	        array[array.length++] = argv[i];
	    }

	    return array.length;
	},
	

	defer: function(statics){
				
		array_push = rhimoo.php.array_push;

	}
});