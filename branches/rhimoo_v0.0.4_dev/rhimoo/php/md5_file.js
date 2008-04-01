rhimoo.defineClass("rhimoo.php.md5",
{
	// Calculates the md5 hash of a given file
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_md5_file/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // -    depends on: file_get_contents
    // -    depends on: md5
    // -    depends on:  utf8_encode
    // *     example 1: md5_file('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm');
    // *     returns 1: '202cb962ac59075b964b07152d234b70'

	/*************************************
		NEEDS REWORK FOR RHIMOO
		because of file_get_contents 
	*************************************/

  statics : function(str_filename){
		//return md5(file_get_contents(str_filename));
	},
	

	defer: function(statics){

		//md5_file = rhimoo.php.md5_file;

	}
});