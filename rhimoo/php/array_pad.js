rhimoo.defineClass("rhimoo.php.array_pad",
{

	// Pad array to the specified length with a value
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_pad/
    // +       version: 803.2519
    // +   original by: _argos
    // *     example 1: array_pad([ 7, 8, 9 ], 2, 'a');
    // *     returns 1: [ 7, 8, 9]
    // *     example 2: array_pad([ 7, 8, 9 ], 5, 'a');
    // *     returns 2: [ 7, 8, 9, 'a', 'a']
    // *     example 3: array_pad([ 7, 8, 9 ], 5, 2);
    // *     returns 3: [ 7, 8, 9, 2, 2]
    // *     example 4: array_pad([ 7, 8, 9 ], -5, 'a');
    // *     returns 4: [ 'a', 'a', 7, 8, 9 ]

  statics : function(input, pad_size, pad_value){
		var pad = [], newArray = [], newLength, i=0;

	    if ( input instanceof Array && !isNaN ( pad_size ) ) {
	        newLength = ( ( pad_size < 0 ) ? ( pad_size * -1 ) : pad_size );
	        if ( newLength > input.length ) {
	            for ( i = 0; i < ( newLength - input.length ); i++ ) { newArray [ i ] = pad_value; }
	            pad = ( ( pad_size < 0 ) ? newArray.concat ( input ) : input.concat ( newArray ) );
	        } else {
	            pad = input;
	        }
	    }

	    return pad;
	},
	

	defer: function(statics){
				
		array_pad = rhimoo.php.array_pad;

	}
});