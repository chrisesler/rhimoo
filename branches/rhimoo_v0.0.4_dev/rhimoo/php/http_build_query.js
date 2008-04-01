rhimoo.defineClass("rhimoo.php.http_build_query",
{
	// Generate URL-encoded query string
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_http_build_query/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Legaev Andrey
    // +   improved by: Michael White (http://crestidg.com)
    // *     example 1: http_build_query({ foo: 'bar', baz: 'boom', cow: 'milk', php: 'hypertext processor' }, '', '&amp;');
    // *     returns 1: 'foo=bar&amp;baz=boom&amp;cow=milk&amp;php=hypertext+processor'
    // *     example 2: http_build_query({0: 'foo', 1: 'bar', 2: 'baz', 3: 'boom', cow: 'milk', php :'hypertext processor'}, 'myvar_');
    // *     returns 2: 'myvar_0=foo&myvar_1=bar&myvar_2=baz&myvar_3=boom&cow=milk&php=hypertext+processor'

	/*************************************
		NEEDS REWORK FOR RHIMOO
	*************************************/

  statics : function(formdata, numeric_prefix, arg_separator){
		/*var key, use_val, use_key, i = 0, tmp_arr = [];

	    if(!arg_separator){
	        arg_separator = '&';
	    }

	    for(key in formdata){
	        use_key = encodeURIComponent(key);
	        use_val = encodeURIComponent((formdata[key].toString()));
	        use_val = use_val.replace(/%20/g, '+');

	        if(numeric_prefix && !isNaN(key)){
	            use_key = numeric_prefix + i;
	        }
	        tmp_arr[i] = use_key + '=' + use_val;
	        i++;
	    }

	    return tmp_arr.join(arg_separator);*/
	},
	

	defer: function(statics){

		//http_build_query = rhimoo.php.http_build_query;

	}
});