rhimoo.defineClass("rhimoo.util.include",
{
  statics : function(file){
	// need to add function to check if file exists
	load(file);
  },
	defer: function(statics){
		print("----- loaded include Utility");
	}
});

include = rhimoo.util.include;