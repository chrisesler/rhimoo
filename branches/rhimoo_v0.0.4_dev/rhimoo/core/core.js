var rhimoo = {
	version: '0.0.1',
	repository: 'rhimoo/',
	registry: {
		Id: [],
		Class: {},
		deferred: []
	},
	
	init: function(options){
		print("==============================================");
		print("  RHIMOO INITIALIZATION  ");
		print("  Version: "+this.version);
		print("==============================================");
		new bootstrap(options);
		print("==============================================");
		print("  LOADING REQUIRED ");
		print("==============================================");
		rhimoo.loadRequired('rhimoo.util.idGenerator');
		rhimoo.loadRequired('rhimoo.util.include');
		rhimoo.loadRequired('rhimoo.util.loadVendors');
		rhimoo.loadRequired("rhimoo.server.init");
		rhimoo.loadRequired('rhimoo.template.parser');
		
		
		print("==============================================");
		print("  LOADING VENDOR FILES ");
		print("==============================================");
		rhimoo.util.loadVendors();
		
		print("==============================================");
		print("  RUNNING DEFFERED ACTIONS ");
		print("==============================================");
		rhimoo.registry.deferred.each(function(item){
			item();
		});	
	}
};