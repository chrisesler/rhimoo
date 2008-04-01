rhimoo.defineClass("rhimoo.php.rand",
{
	// Generate a random integer
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_rand/
    // +       version: 803.2519
    // +   original by: Leslie Hoare
    // *     example 1: rand(1, 1);
    // *     returns 1: 1

  statics : function(min, max){
		if( max ) {
	        return Math.floor(Math.random() * (max - min + 1)) + min;
	    } else {
	        return Math.floor(Math.random() * (min + 1));
	    }
	},
	

	defer: function(statics){

		rand = rhimoo.php.rand;

	}
});