var rhimoo = {
	version: '0.0.1',
	repository: 'rhimoo/',
	registry: {
		Id: [],
		Class: {},
		deferred: []
	},
	
	dirs: {},
	
	init: function(options){
		print("==============================================");
		print("  RHIMOO WEBSERVER INITIALIZATION  ");
		print("  Version: "+this.version);
		print("==============================================");
		new bootstrap(options);
			
	},
	
	appinit: function(options){
		print("==============================================");
		print("  RHIMOO APPLICATION INITIALIZATION  ");
		print("  Version: "+this.version);
		print("==============================================");
		new bootstrap(options);
		
		// lets load some required items here
		rhimoo.loadRequired([
			'rhimoo.util.idGenerator',
			'rhimoo.util.include',
			'rhimoo.util.substr',
			'rhimoo.util.loadVendors'
		]);	
	}
};