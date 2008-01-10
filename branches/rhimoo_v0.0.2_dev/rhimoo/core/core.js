var rhimoo = {
	version: '0.0.1',
	repository: 'rhimoo/',
	registry: {
		Id: [],
		Class: {}
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
		rhimoo.loadRequired('rhimoo.template.parser');
	}
};