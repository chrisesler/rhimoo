var rhimoo = {
	version: '0.0.1',
	repository: 'rhimoo/',
	registry: {
		Id: [],
		Class: {},
		deferred: [],
		includes: []
	},
	debug: false,
	
	dirs: {},
	
	init: function(options){
		print("==============================================");
		print("  RHIMOO WEBSERVER INITIALIZATION  ");
		print("  Version: "+this.version);
		print("==============================================");
		//print($type(options));
		if(!$type(options)){
			options = {};
		}
		if($type(options.debug)){
			this.debug = options.debug;
			options.debug = null;
		}
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
			'rhimoo.php.init',
			'rhimoo.util.loadVendors'
		]);	
	}
};