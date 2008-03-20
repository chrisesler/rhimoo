var controllerItem = {
	path : "redirect",
	controller : {
		Implements: rhimoo.controller.object,
		main: function(request, response){
			
			response.sendRedirect("/funny");
		}
		
		
	}
	
};
