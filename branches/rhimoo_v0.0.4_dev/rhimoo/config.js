rhimoo.defineClass("rhimoo.config",
{

  statics : new Class({
	__metaobject__: {},
	registry: {},
	properties: null,
	initialize: function(){
		
		var metas = {
			set : function(thisObj,prop,value) {
			      
				print("PROP: "+prop);
				print("VALUE: "+value);
				thisObj[prop] = value;

			},
			get : function(thisObj,prop) {
			      
				print("PROP: "+prop);
				return thisObj[prop];
				//print(thisObj.properties.getProperty(prop).propertyName());
			   //thisObj[prop]=value;
			}
			/*,
			hasInstanceOf : function(thisObj,instance) {
			  //if (instance.mickey == 'mouse') return true;
			  //else return (instance instanceof thisObj);
				print("INSTANCE: "+instance);
			}*/
		}
		
		this.__metaobject__ = metas;
		this.registry.__metaobject__ = metas;

		this.properties = new java.util.Properties();
		var propFile = new FileInputStream(new File(root+"config/server.properties"));
		this.properties.load(propFile);

 
		print(this.properties.hashCode());

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
						if(this.registry[item]){
							this.prop = this.registry[item];
						}else{
							this.prop = this.registry[item] = {};
						}

					}else{

						if(total == (idx+1)){
							propValue = new String(this.properties.get(new java.lang.String(it)));
							this.prop[item] = propValue;
						}else{
							this.prop = this.prop[item] = {};
						}
					}
				},this);
			}else{
				this.registry[it] = this.properties.getProperty(it.trim());
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