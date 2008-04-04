rhimoo.defineClass("rhimoo.php.strcmp",
{
	// Binary safe string comparison
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_strcmp/
    // +       version: 803.2519
    // +   original by: _argos
    // *     example 1: strcmp( 'waldo', 'Waldo' );
    // *     returns 1: 1
    // *     example 2: strcmp( 'Waldo', 'waldo' );
    // *     returns 2: -1
    // *     example 3: strcmp( 'waldo', 'waldo' );
    // *     returns 3: 0

  statics : function(str1, str2){
		var size1 = str1.charCodeAt ( 0 );
	    var size2 = str2.charCodeAt ( 0 );

	    return ( ( size1 == size2 ) ? 0 : ( ( size1 > size2 ) ? 1 : -1 ) );
	},
	

	defer: function(statics){

		strcmp = rhimoo.php.strcmp;

	}
});