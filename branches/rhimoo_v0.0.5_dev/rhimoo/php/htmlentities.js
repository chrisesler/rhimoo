rhimoo.defineClass("rhimoo.php.htmlentities",
{
	// Convert all applicable characters to HTML entities
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_htmlentities/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: htmlentities('Kevin & van Zonneveld');
    // *     returns 1: 'Kevin &amp; van Zonneveld'

	/*************************************
		NEEDS REWORK FOR RHIMOO
	*************************************/

  statics : function(s){
		/*var div = document.createElement('div');
	    var text = document.createTextNode(s);
	    div.appendChild(text);
	    return div.innerHTML;*/
	},
	

	defer: function(statics){

		//htmlentities = rhimoo.php.htmlentities;

	}
});