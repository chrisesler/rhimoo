rhimoo.defineClass("rhimoo.util.substr",
{

  statics : function(str,start,length){

		if(length){
			return str.substr(start,length);
		}else{
			return str.substr(start);
		}
	
	},
	defer: function(statics){
		substr = rhimoo.util.substr;
		print("----- loaded routing manager");
	}
});