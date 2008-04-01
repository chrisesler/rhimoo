rhimoo.defineClass("rhimoo.php.str_ireplace",
{
	// Case-insensitive version of str_replace().
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_str_ireplace/
    // +       version: 803.2519
    // +   original by: Martijn Wieringa
    // +      input by: penutbutterjelly
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: str_ireplace('l', 'l', 'HeLLo');
    // *     returns 1: 'Hello'

  statics : function(search, replace, subject){
		var i;

	    if(!(replace instanceof Array)){
	        replace=new Array(replace);
	        if(search instanceof Array){//If search    is an array and replace    is a string, then this replacement string is used for every value of search
	            while(search.length>replace.length){
	                replace[replace.length]=replace[0];
	            }
	        }
	    }

	    if(!(search instanceof Array))search=new Array(search);
	    while(search.length>replace.length){//If replace    has fewer values than search , then an empty string is used for the rest of replacement values
	        replace[replace.length]='';
	    }

	    if(subject instanceof Array){//If subject is an array, then the search and replace is performed with every entry of subject , and the return value is an array as well.
	        for(k in subject){
	            subject[k]=str_replace(search,replace,subject[k]);
	        }
	        return subject;
	    }


	    for(var k=0; k<search.length; k++){
	        reg = new RegExp(search[k], 'gi');
	        subject = subject.replace(reg, replace[k]);
	    }


	    return subject;
	},
	

	defer: function(statics){

		str_ireplace = rhimoo.php.str_ireplace;

	}
});