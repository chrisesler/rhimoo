rhimoo.defineClass("rhimoo.php.sha1_file",
{
	// Calculate the sha1 hash of a file
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_sha1_file/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // -    depends on: file_get_contents
    // -    depends on: sha1
    // *     example 1: sha1_file('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm');
    // *     returns 1: '40bd001563085fc35165329ea1ff5c5ecbdbbeef'

	/*************************************
		NEEDS REWORK FOR RHIMOO
		because of file_get_contents
	*************************************/

  statics : function(str_filename){
		/*var buf = file_get_contents(str_filename);
	    return sha1(buf);*/
	},
	

	defer: function(statics){

		//sha1_file = rhimoo.php.sha1_file;

	}
});