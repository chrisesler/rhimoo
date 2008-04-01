rhimoo.defineClass("rhimoo.php.file_get_contents",
{
	// Reads entire file into a string
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_file_get_contents/
    // +       version: 803.2519
    // +   original by: Legaev Andrey
    // %        note 1: This function uses XmlHttpRequest and cannot retrieve resource from different domain.
    // *     example 1: file_get_contents('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm');
    // *     returns 1: '123'

	/*************************************
		NEEDS REWORK FOR RHIMOO
	*************************************/

  statics : function(url){
		/*var req = null;
	    try { req = new ActiveXObject("Msxml2.XMLHTTP"); } catch (e) {
	        try { req = new ActiveXObject("Microsoft.XMLHTTP"); } catch (e) {
	            try { req = new XMLHttpRequest(); } catch(e) {}
	        }
	    }
	    if (req == null) throw new Error('XMLHttpRequest not supported');

	    req.open("GET", url, false);
	    req.send(null);

	    return req.responseText;*/
	},
	

	defer: function(statics){

		//file_get_contents = rhimoo.php.file_get_contents;

	}
});