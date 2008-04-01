rhimoo.defineClass("rhimoo.php.array_count_values",
{

	// Counts all the values of an array
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_array_count_values/
    // +       version: 803.2519
    // +   original by: Ates Goral (http://magnetiq.com)
    // + namespaced by: Michael White (http://crestidg.com)
    // *     example 1: array_count_values([ 3, 5, 3, "foo", "bar", "foo" ]);
    // *     returns 1: {3:2, 5:1, "foo":2, "bar":1}
    // *     example 2: array_count_values({ p1: 3, p2: 5, p3: 3, p4: "foo", p5: "bar", p6: "foo" });
    // *     returns 2: {3:2, 5:1, "foo":2, "bar":1}
    // *     example 3: array_count_values([ true, 4.2, 42, "fubar" ]);
    // *     returns 3: {42:1, "fubar":1}

  statics : function(array){
		var tmp_ar = new Object(), key;

	    var countValue = function (value) {
	        switch (typeof(value)) {
	        case "number":
	            if (Math.floor(value) != value) {
	                return;
	            }
	        case "string":
	            if (value in this) {
	                ++this[value];
	            } else {
	                this[value] = 1;
	            }
	        }
	    }

	    if (array instanceof Array) {
	        array.forEach(countValue, tmp_ar);
	    } else if (array instanceof Object) {
	        for (var key in array) {
	            countValue.call(tmp_ar, array[key]);
	        }
	    }

	    return tmp_ar;
	},
	

	defer: function(statics){
				
		array_count_values = rhimoo.php.array_count_values;

	}
});