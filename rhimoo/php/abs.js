rhimoo.defineClass("rhimoo.php.abs",
{
	// Absolute value
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_abs/
    // +       version: 803.2913
    // +   original by: _argos
    // +   improved by: Karol Kowalski
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: abs(4.2);
    // *     returns 1: 4.2
    // *     example 2: abs(-4.2);
    // *     returns 2: 4.2
    // *     example 3: abs(-5);
    // *     returns 3: 5
    // *     example 4: abs('_argos');
    // *     returns 4: 0

  statics : function(mixed_number){
		return ( ( isNaN ( mixed_number ) ) ? 0 : Math.abs ( mixed_number ) );
	},
	

	defer: function(statics){

		abs = rhimoo.php.abs;

	}
});