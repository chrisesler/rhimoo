rhimoo.defineClass("rhimoo.php.call_user_func_array",
{
	// Call a user function given with an array of parameters
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_call_user_func_array/
    // +       version: 803.2519
    // +   original by: Thiago Mata (http://thiagomata.blog.com)
    // *     example 1: call_user_func_array('isNaN', ['a']);
    // *     returns 1: true
    // *     example 2: call_user_func_array('isNaN', [1]);
    // *     returns 2: false

  statics : function(s){
		var strCommand = "";
	    var i;

	    strCommand += "return " + strFunctionName + "(";
	    for( i = 0; i < arrParam.length; ++i ) {
	        strCommand += "arrParam[" + i + "]" ;
	        if( ( i + 1 ) != arrParam.length ) {
	            strCommand += ",";
	        }
	    }
	    strCommand += ")";
	    var oFunction = new Function( "arrParam" , strCommand );
	    return oFunction( arrParam );
	},
	

	defer: function(statics){

		call_user_func_array = rhimoo.php.call_user_func_array;

	}
});