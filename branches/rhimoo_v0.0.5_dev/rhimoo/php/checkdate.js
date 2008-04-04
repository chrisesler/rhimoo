rhimoo.defineClass("rhimoo.php.checkdate",
{
	// Validate a Gregorian date
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_checkdate/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: checkdate(12, 31, 2000);
    // *     returns 1: true
    // *     example 2: checkdate(2, 29, 2001);
    // *     returns 2: false

  statics : function(month, day, year){
		var myDate = new Date();

	    myDate.setFullYear( year, month, day );

	    return ( myDate.getMonth() != month );
	},
	

	defer: function(statics){

		checkdate = rhimoo.php.checkdate;

	}
});