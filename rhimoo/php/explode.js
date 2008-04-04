rhimoo.defineClass("rhimoo.php.explode",
{
	// Split a string by string
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_explode/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: kenneth
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: explode(' ', 'Kevin van Zonneveld');
    // *     returns 1: {0: 'Kevin', 1: 'van', 2: 'Zonneveld'}

  statics : function(delimiter, string){
		var emptyArray = { 0: '' };

	    if ( arguments.length != 2
	        || typeof arguments[0] == 'undefined'
	        || typeof arguments[1] == 'undefined' )
	    {
	        return null;
	    }

	    if ( delimiter === ''
	        || delimiter === false
	        || delimiter === null )
	    {
	        return false;
	    }

	    if ( typeof delimiter == 'function'
	        || typeof delimiter == 'object'
	        || typeof string == 'function'
	        || typeof string == 'object' )
	    {
	        return emptyArray;
	    }

	    if ( delimiter === true ) {
	        delimiter = '1';
	    }

	    return string.toString().split ( delimiter.toString() );
	},
	

	defer: function(statics){

		explode = rhimoo.php.explode;

	}
});