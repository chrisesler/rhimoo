rhimoo.defineClass("rhimoo.util.idGenerator",
{
  statics :
  new Class({
	// most of this is from mooglets
	letters: ['m','g','l','t','s','M','G','L','T','S'],
	generate: function(num){
		var instance = '';
		for (i=0; i < num; i++) {
			var numI = this.getRandomNum();
			while (this.checkPunc(numI)) { numI = this.getRandomNum(); }
			instance += String.fromCharCode(numI);
		}
		return this.getOneNum(true)+instance;
	},

	getOneNum: function(alpha){
		var rndNum = Math.random();
		rndNum = parseInt(rndNum * 10);
		if (alpha) return this.letters[rndNum];
		else return rndNum;
	},

	getRandomNum: function(){
		var rndNum = Math.random();
		rndNum = parseInt(rndNum * 1000);
		rndNum = (rndNum % 94) + 33;
		return rndNum;
	},

	checkPunc: function(num){
		if (((num >=33) && (num <=47)) || ((num >=58) && (num <=64)) || ((num >=91) && (num <=96)) || ((num >=123) && (num <=126))) return true;
		return false;
	}, 
	
	// set id function - new
	setId: function(id){
		if(!$type(id)){
			var tmp = this.generate(10);
			if(rhimoo.registry.Id.contains(tmp)){
				this.setId(id);
			}else{
				rhimoo.registry.Id.include(tmp);
				return tmp;
			}
		}else{
			// probably should do some error handling
			// to check for existing id here as well
			//this.idRegistry.include(id);
			rhimoo.registry.Id.include(id);
			return id;
		}
	}
  }),


  /*
  *****************************************************************************
     DEFER
  *****************************************************************************
  */

  defer : function(statics)
  {
    rhimoo.util.idGenerator = new statics();
	print("----- loaded idGenerator Utility and initialized successfully");
  }

});