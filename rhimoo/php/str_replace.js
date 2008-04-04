rhimoo.defineClass("rhimoo.php.str_replace",
{
	// Replace all occurrences of the search string with the replacement string
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_str_replace/
    // +       version: 803.3117
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Gabriel Paderni
    // +   improved by: Philip Peterson
    // +   improved by: Simon Willison (http://simonwillison.net)    
    // *     example 1: str_replace(' ', '.', 'Kevin van Zonneveld');
    // *     returns 1: 'Kevin.van.Zonneveld'

  statics : function(search, replace, subject){
		var __regexp_escape = function(text) {
	        if (!arguments.callee.sRE) {
	            var specials = [
	                '/', '.', '*', '+', '?', '|',
	                '(', ')', '[', ']', '{', '}', '\\'
	            ];
	            arguments.callee.sRE = new RegExp(
	                '(\\' + specials.join('|\\') + ')', 'g'
	            );
	        }
	    	return text.replace(arguments.callee.sRE, '\\$1');
	    };

	    var numreplx, numon, fincods, k;

	    if(!(replace instanceof Array)){
	        replace = new Array(replace);
	        if(search instanceof Array){
	            // If search is an array and replace is a string, 
	            // then this replacement string is used for every value of search
	            while(search.length>replace.length){
	                replace[replace.length]=replace[0];
	            }
	        }
	    }

	    if(!(search instanceof Array)){
	        // put search string in an array anyway
	        search = new Array( search );
	    }
	    while( search.length > replace.length ){ 
	        // If replace has fewer values than search, 
	        // then an empty string is used for the rest of replacement values
	        replace[replace.length] = '';
	    }

	    if(subject instanceof Array){
	        // If subject is an array, then the search and replace is performed 
	        // with every entry of subject , and the return value is an array as well.
	        for(k in subject){
	            subject[k] = str_replace(search, replace, subject[k]);
	        }
	        return subject;
	    }

	    // Each entry is replaced all at once, rather than one after another. 
	    // This creates a problem: str_replace(["{name}","l"], ["hello","m"], "{name}, lars")
	    // Theoretically, the code should return "hello, mars", but instead it returns "hemmo, mars"
	    // as pointed out and fixed by Philip Peterson
	    numreplx = search.length;
	    numon = 0;
	    fincods = new Array();
	    while( fincods.length < numreplx ){
	        nsub = subject;
	        for( x = 0; x < fincods.length; x++ ){
	            nsub = nsub.replace(new RegExp(__regexp_escape(search[x]), "g"), "[cod"+fincods[x]+"]");
	        }
	        for( x = 0; x < fincods.length; x++ ){
	            nsub = nsub.replace(new RegExp(__regexp_escape("[cod"+fincods[x]+"]"), "g"), replace[x]);
	        }
	        if( nsub.indexOf("[cod"+numon+"]") == -1 ){
	            fincods[fincods.length]=numon;
	        }
	        numon++;
	    }
	    for( x = 0; x < fincods.length; x++ ){
	        subject=subject.replace(new RegExp(__regexp_escape(search[x]), "g"), "[cod"+fincods[x]+"]");
	    }
	    for( x = 0; x < fincods.length; x++ ){
	        subject=subject.replace(new RegExp(__regexp_escape("[cod"+fincods[x]+"]"), "g"), replace[x]);
	    }
	    return subject;
	},
	

	defer: function(statics){

		str_replace = rhimoo.php.str_relace;

	}
});