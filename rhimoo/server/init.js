rhimoo.defineClass("rhimoo.server.init",
{
	requires: [
		"rhimoo.server.templates.jettyServer",
	],
	
  statics : new Class({
		Implements: Options,
		options: {
			useAJP: false,
			ports: {
				server: 3000,
				ajp: 8080
			},
			assets: {
				path: "/",
				file: "./public"
			}

		},

		bootStrap: null,
		jetty: null,

		initialize: function(options){

			if(options){
				this.setOptions(options);
			}

			var bootstrap = $merge(this.options,rhimoo.server.templates.jettyServer);

			this.jetty = new MooServer(bootstrap);
						
			this.jetty.Setup();
		}

	})
});