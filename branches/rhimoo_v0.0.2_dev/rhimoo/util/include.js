rhimoo.defineClass("rhimoo.util.include",
{
  statics : function(file){
	load(file);
  },
	defer: function(statics){
		print("----- loaded include Utility");
	}
});

include = rhimoo.util.include;