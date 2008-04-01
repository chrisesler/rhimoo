rhimoo.defineClass("rhimoo.php.array_product",
{

	// Calculate the product of values in an array
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_product/
    // +       version: 803.2519
    // +   original by: _argos
    // *     example 1: array_product([ 2, 4, 6, 8 ]);
    // *     returns 1: 384

  statics : function(input){
		var Index = 0, Product = 1;
	    if ( input instanceof Array ) {
	        while ( Index < input.length ) {
	            Product *= ( !isNaN ( input [ Index ] ) ? input [ Index ] : 0 );
	            Index++;
	        }
	    } else {
	        Product = null;
	    }

	    return Product;
	},
	

	defer: function(statics){
				
		array_product = rhimoo.php.array_product;

	}
});