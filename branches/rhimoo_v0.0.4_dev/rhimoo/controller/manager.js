rhimoo.defineClass("rhimoo.controller.manager",
{
	requires: ["rhimoo.controller.object"],
	
  statics : new Class({
		controllers: {},
		initialize: function(){
			this.loadControllers();
		},		
		loadControllers : function(){

			var controllerDir = new File(rhimoo.getDir('controllers'));
			var fileList = controllerDir.list();

			for(var i = 0; i < fileList.length; i++) {
				var file = fileList[i];
				if(file.substr(0,1) != "."){
					load(rhimoo.getDir('controllers')+file);

					print("+++++ CONTROLLER : "+file);

					[controllerFile, controllerName] = file.match("(.*)\.js");

					// check if object or class
					if($type(controllerItem.controller) == "object"){
						var tmp = new Class(controllerItem.controller);
						this.controllers[controllerName] = new tmp();
					}
					else if($type(controllerItem.controller) == "class"){
						this.controllers[controllerName] = new controllerItem.controller();
					}
					else{
						print("*** CONTROLLER FOR '"+file+"' IS NOT VALID");
					}
					

				}
			}
		}
	}),
	defer: function(statics){
		rhimoo.controller.manager = new rhimoo.controller.manager();
		print("----- loaded controller manager");
	}
});

include = rhimoo.util.include;