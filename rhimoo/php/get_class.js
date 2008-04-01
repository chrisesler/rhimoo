rhimoo.defineClass("rhimoo.php.get_class",
{
	// Returns the name of the class of an object
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_get_class/
    // +       version: 803.2519
    // +   original by: Ates Goral (http://magnetiq.com)
    // +   improved by: David James
    // *     example 1: get_class(new (function MyClass() {}));
    // *     returns 1: "MyClass"
    // *     example 2: get_class({});
    // *     returns 2: "Object"
    // *     example 3: get_class([]);
    // *     returns 3: false
    // *     example 4: get_class(42);
    // *     returns 4: false
    // *     example 5: get_class(window);
    // *     returns 5: false
    // *     example 6: get_class(function MyFunction() {});
    // *     returns 6: false

  statics : function(obj){
		if (obj instanceof Object && !(obj instanceof Array) &&
	        !(obj instanceof Function) && obj.constructor) {
	        var arr = obj.constructor.toString().match(/function\s*(\w+)/);

	        if (arr && arr.length == 2) {
	            return arr[1];
	        }
	    }

	    return false;
	},
	

	defer: function(statics){

		get_class = rhimoo.php.get_class;

	}
});