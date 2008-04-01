rhimoo.defineClass("rhimoo.php.html_entitry_decode",
{
	// Convert all HTML entities to their applicable characters
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_html_entity_decode/
    // +       version: 803.2519
    // +   original by: john (http://www.jd-tech.net)
    // +      input by: ger
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: html_entity_decode('Kevin &amp; van Zonneveld');
    // *     returns 1: 'Kevin & van Zonneveld'

  statics : function(string){
		var ret, tarea = document.createElement('textarea');
	    tarea.innerHTML = string;
	    ret = tarea.value;
	    return ret;
	},
	

	defer: function(statics){

		html_entitry_decode = rhimoo.php.html_entitry_decode;

	}
});