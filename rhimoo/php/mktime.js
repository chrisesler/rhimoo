rhimoo.defineClass("rhimoo.php.mktime",
{
	// Get Unix timestamp for a date
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_mktime/
    // +       version: 803.2519
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: baris ozdil
    // +      input by: gabriel paderni 
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: mktime( 14, 10, 2, 2, 1, 2008 );
    // *     returns 1: 1201871402

  statics : function(){
		var no, i = 0, d = new Date(), argv = arguments, argc = argv.length;

	    var dateManip = {
	        0: function(tt){ return d.setHours(tt); },
	        1: function(tt){ return d.setMinutes(tt); },
	        2: function(tt){ return d.setSeconds(tt); },
	        3: function(tt){ return d.setMonth(parseInt(tt)-1); },
	        4: function(tt){ return d.setDate(tt); },
	        5: function(tt){ return d.setYear(tt); }
	    };

	    for( i = 0; i < argc; i++ ){
	        no = parseInt(argv[i]);
	        if(no && isNaN(no)){
	            return false;
	        } else if(no){
	            // arg is number, let's manipulate date object
	            if(!dateManip[i](no)){
	                // failed
	                return false;
	            }
	        }
	    }

	    return Math.floor(d.getTime()/1000);
	},
	

	defer: function(statics){

		mktime = rhimoo.php.mktime;

	}
});