rhimoo.defineClass("rhimoo.php.array_rand",
{

	// Pick one or more random entries out of an array
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_rand/
    // +       version: 803.2519
    // +   original by: _argos
    // *     example 1: array_rand( ['Kevin'], 1 );
    // *     returns 1: 0

  statics : function(input, num_req){
		var Indexes = [];
	    var Ticks = num_req || 1;
	    var Check = {
	        Duplicate    : function ( input, value ) {
	            var Exist = false, Index = 0;
	            while ( Index < input.length ) {
	                if ( input [ Index ] === value ) {
	                    Exist = true;
	                    break;
	                }
	                Index++;
	            }
	            return Exist;
	        }
	    };

	    if ( input instanceof Array && Ticks <= input.length ) {
	        while ( true ) {
	            var Rand = Math.floor ( ( Math.random ( ) * input.length ) );
	            if ( Indexes.length === Ticks ) { break; }
	            if ( !Check.Duplicate ( Indexes, Rand ) ) { Indexes.push ( Rand ); }
	        }
	    } else {
	        Indexes = null;
	    }

	    return ( ( Ticks == 1 ) ? Indexes.join ( ) : Indexes );
	},
	

	defer: function(statics){
				
		array_rand = rhimoo.php.array_rand;

	}
});