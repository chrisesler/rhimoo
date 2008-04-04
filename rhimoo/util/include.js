rhimoo.defineClass("rhimoo.util.include",
{
  statics : function(file){
	// need to add function to check if file exists
	if(rhimoo.registry.includes.contains(file)) rhimoo.registry.includes.push(file);
	load(file);
  },
	defer: function(statics){
		print("----- loaded include Utility");
	}
});

include = rhimoo.util.include;