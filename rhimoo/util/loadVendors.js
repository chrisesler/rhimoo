rhimoo.defineClass("rhimoo.util.loadVendors",
{
  statics : function(){
		
		var vendorDir = new File(root+"vendors");
		var fileList = vendorDir.list();
		manifest = [];
		
		//print(fileList);
		for(var i = 0; i < fileList.length; i++) {
			var file = fileList[i];
			if(file.substr(0,1) != "."){
				var vendor = new File(vendorDir.getAbsolutePath()+"/"+file);
				if(vendor.isDirectory()){
					var manifestCheck = new File(vendor.getAbsolutePath()+"/manifest.js");
					if(manifestCheck.exists()){
						//print("+ "+file);
						load(vendor.getAbsolutePath()+"/manifest.js");
						manifest.each(function(vendorFile){
							print("++ "+vendorFile);
							load(vendor.getAbsolutePath()+"/"+vendorFile);
						});
					}
				}
			}
		}
	},
  	defer : function(statics)
	  {
	    print("----- loaded loadVendors utility");
	  }
});