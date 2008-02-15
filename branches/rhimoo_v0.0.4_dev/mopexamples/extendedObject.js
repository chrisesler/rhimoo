/**
   Adds functions from the mixed-in object's prototype to this object's prototype.
   If the mix-in has a mixedIn method, it will be called.
   
   This is a modified version of David Flanagan's borrowMethods function
   from "JavaScript: The Definitive Guide", 5th ed, p. 171.
 */
Object.prototype.addMixIn = function(mixIn) {
   var from = mixIn;
   var to = this.prototype;
   
   for (method in from) {
      if (from.hasOwnProperty(method)) {
         if (typeof from[method] !== "function") continue;
         if (method === "addMixIn" || method === "mixedIn") continue;
         to[method] = from[method];
      }
   }
   // If the mix-in object has a mixedIn method, it will be called.
   //  This emulates Ruby's Module#Included callback method.
   if (mixIn.mixedIn) {
      mixIn.mixedIn(this);
   }
}
