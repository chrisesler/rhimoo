rhimoo.defineClass("rhimoo.php.shuffle",
{
	// Shuffle an array
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_shuffle/
    // +       version: 803.2519
    // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // *     example 1: shuffle(['Kevin', 'van', 'Zonneveld']);
    // *     returns 1: true

  statics : function(array){
		for(var j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
	    return true;
	},
	

	defer: function(statics){

		shuffle = rhimoo.php.shuffle;

	}
});