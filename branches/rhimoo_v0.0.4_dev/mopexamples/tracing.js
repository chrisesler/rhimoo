/**
 * Logging messages are used so that traceObject's implementation does
 * not need to be modified.
 */
function logMessage(msg) {
  print(msg);
}
function logWarning(warning) {
  print(warning);
}
function logError(err) {
  print(err);
}

/**
 * Logs the getting and setting of all properties.
 */
function traceObject(o, objName) { 
  var oldMo = o.__metaobject__;
  var tracingMO = {};
  
  // If no name is specified, object.name will be used in
  // the tracing logs.  Failing that, it will use the
  // string value of the object.
  objName = objName || o.name || ""+o;
  
  // This function can be used to disable a tracing routine.
  tracingMO.stopTrace = function() {
    o.__metaobject__ = oldMo;
  }
  
  // Logs the getting of properties.  Functions returned
  // will print their property 
  tracingMO.get = function(thisObj,prop) {
    logMessage("***Getting " + prop + " from " + objName);
    
    var returnVal = thisObj[prop];
    if (oldMo) returnVal = oldMo.get(thisObj,prop);
    
    //We'll wrap functions so that we know when they are called.
    if ((typeof returnVal) == "function") {
      var wrapFunct = function() {
        var msg = "***Calling " + prop + " with args:";
        for (var i=0; i<arguments.length; i++) {
          msg += " " + arguments[i];
        }
        logMessage(msg);
        returnVal.apply(thisObj, arguments);
      }
      return wrapFunct;
    }
    else return returnVal;
  }
  
  // Logs the setting of properties
  tracingMO.set = function(thisObj,prop,value) {
    logMessage("***Setting " + objName + "'s " + prop + " to '" + value + "'");
    
    if (oldMo) oldMo.set(thisObj,prop,value);
    else thisObj[prop] = value;
  }
  
  o.__metaobject__ = tracingMO;
}

/**
 * Disables tracing, if on.
 * Otherwise prints a warning.
 */
function stopTrace(o) {
  if (o.__metaobject__ && o.__metaobject__.stopTrace) {
    o.__metaobject__.stopTrace();
  }
  else {
    logWarning("Object '" + o + "' is not being traced.")
  }
}

var rincewind = {};
traceObject(rincewind, "Rincewind"); //Enables tracing

rincewind.hatName = "Wizzard";
rincewind.weapon = "sock & half-brick";
rincewind.attack = function(enemyName) {
  print("Hit " + enemyName + " with " + rincewind.weapon);
}

rincewind.attack("Hell-Demon");
rincewind.weapon = "other sock & half-brick";
rincewind.attack("Nastier Hell-Demon");

//We can disable tracing and things will work normally.
stopTrace(rincewind);
print("---TRACING DISABLED---");
rincewind.weapon = "turnip";
rincewind.attack("Evil Warlord");