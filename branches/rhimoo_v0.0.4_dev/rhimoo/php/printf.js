rhimoo.defineClass("rhimoo.php.printf",
{
	// Output a formatted string
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_printf/
    // +       version: 803.2519
    // +   original by: Ash Searle (http://hexmen.com/blog/)
    // +   improved by: Michael White (http://crestidg.com)
    // -    depends on: sprintf
    // *     example 1: printf("%01.2f", 123.1);
    // *     returns 1: 6

	/* PROBABLY NEEDS REWRITE FOR RHIMOO */

  statics : function(){
		var ret = sprintf.apply(this, arguments);
	    document.write(ret);
	    return ret.length;
	},
	

	defer: function(statics){

		printf = rhimoo.php.printf;

	}
});