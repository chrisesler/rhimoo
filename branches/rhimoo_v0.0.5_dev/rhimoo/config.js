rhimoo.defineClass("rhimoo.config",
{

  statics : new Class({
	__metaobject__: {},
	registry: {},
	properties: null,
	initialize: function(){


		this.properties = new java.util.Properties();
		var propFile = new FileInputStream(new File(root+"config/server.properties"));
		this.properties.load(propFile);

		var tmp = this.properties.keySet().toString();
		tmp = tmp.substring(1,tmp.length()-1);
		tmp = tmp.split(",");
		tmp.each(function(it,index){
			orig = it;
			it = it.trim();
			it = new String(it);

			if(it.contains(".")){
				var items = it.split(".");
				total = items.length;
				items.each(function(item,idx){
					item = item.trim();
					if(idx == 0){
						this.prop = null;
						if(this[item]){
							this.prop = this[item];
						}else{
							this.prop = this[item] = {};
						}

					}else{

						if(total == (idx+1)){
							propValue = new String(this.properties.get(new java.lang.String(it)));
							if(propValue == "true"){
								propValue = new Boolean(true);
							}
							if(propValue == "false"){
								propValue = new Boolean(false);
							}
							this.prop[item] = propValue;
						}else{
							this.prop = this.prop[item] = {};
						}
					}
				},this);
			}else{
				this[it] = this.properties.getProperty(it.trim());
			}
		},this);

		propFile.close (  ) ;
	},
	
  }),
	defer: function(statics){
		rhimoo.config = new rhimoo.config();
		print("----- loaded rhimoo configuration manager");
	}
});