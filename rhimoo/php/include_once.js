rhimoo.defineClass("rhimoo.php.include_once",
{
	// The include_once() statement includes and evaluates the specified file during
    // the execution of the script. This is a behavior similar to the include()
    // statement, with the only difference being that if the code from a file has
    // already been included, it will not be included again.  As the name suggests, it
    // will be included just once.
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_include_once/
    // +       version: 803.2519
    // +   original by: Legaev Andrey
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Michael White (http://crestidg.com)
    // -    depends on: include
    // *     example 1: include_once('/pj_test_supportfile_2.js');
    // *     returns 1: true

	/* MODIFIED TO WORK WITH RHIMOO */

  statics : function(filename){
		if(!rhimoo.registry.includes.contains(filename)){
			rhimoo.registry.includes.push(filename);
			load(filename);
			return true;
		}
		
		/*var cur_file = {};
	    cur_file[window.location.href] = 1;

	    if (!window.php_js) window.php_js = {};
	    if (!window.php_js.includes) window.php_js.includes = cur_file;
	    if (!window.php_js.includes[filename]) {
	        if(include(filename)){
	            return true;
	        }
	    } else{
	        return true;
	    } */
	},
	

	defer: function(statics){

		include_once = rhimoo.php.include_once;

	}
});