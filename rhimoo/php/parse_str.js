rhimoo.defineClass("rhimoo.php.parse_str",
{
	// Parses the string into variables
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_parse_str/
    // +       version: 803.2519
    // +   original by: Cagri Ekin
    // +   improved by: Michael White (http://crestidg.com)
    // *     example 1: parse_str('first=foo&second=bar');
    // *     returns 1: { first: 'foo', second: 'bar' }
    // *     example 2: parse_str('str_a=Jack+and+Jill+didn%27t+see+the+well.');
    // *     returns 2: { str_a: "Jack and Jill didn't see the well." }

  statics : function(str,array){
		var glue1 = '=';
	    var glue2 = '&';

	    var array2 = str.split(glue2);
	    var array3 = [];
	    for(var x=0; x<array2.length; x++){
	        var tmp = array2[x].split(glue1);
	        array3[unescape(tmp[0])] = unescape(tmp[1]).replace(/[+]/g, ' ');
	    }

	    if(array){
	        array = array3;
	    } else{
	        return array3;
	    }
	},
	

	defer: function(statics){

		parse_str = rhimoo.php.parse_str;

	}
});