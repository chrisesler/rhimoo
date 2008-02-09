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
		
		rhimoo.loadRequired([
			'rhimoo.util.idGenerator',
			'rhimoo.util.include',
			'rhimoo.util.loadVendors'
		]);	
	}
};