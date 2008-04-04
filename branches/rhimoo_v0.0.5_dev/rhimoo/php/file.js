rhimoo.defineClass("rhimoo.php.file",
{
	// Reads entire file into an array
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_file/
    // +       version: 803.2519
    // +   original by: Legaev Andrey
    // %        note 1: This function uses XmlHttpRequest and cannot retrieve resource from different domain.
    // *     example 1: file('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm');
    // *     returns 1: {0: '123'}

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

	    return req.responseText.split('\n');*/
	},
	

	defer: function(statics){

		//file = rhimoo.php.file;

	}
});