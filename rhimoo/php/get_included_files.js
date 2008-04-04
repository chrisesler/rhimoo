rhimoo.defineClass("rhimoo.php.get_included_files",
{
	// Returns an array with the names of included or required files
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_get_included_files/
    // +       version: 803.2519
    // +   original by: Michael White (http://crestidg.com)
    // *     example 1: get_included_files();
    // *     returns 1: ['http://kevin.vanzonneveld.net/pj_tester.php']

	/*************************************
		NEEDS REWORK FOR RHIMOO
	*************************************/

  statics : function(){
		/*var cur_file = {};
	    cur_file[window.location.href] = 1;
	    if(!this.__php_js) this.__php_js = {};
	    if(!this.__php_js.includes) this.__php_js.includes = cur_file;

	    var includes = new Array();
	    var i = 0;
	    for(var key in this.__php_js.includes){
	        includes[i] = key;
	        i++;
	    }

	    return includes;*/
	},
	

	defer: function(statics){

		//get_included_files = rhimoo.php.get_included_files;

	}
});