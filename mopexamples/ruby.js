/**
 * Attempts to make JS properties behave like Ruby.
 */

var t = {};
t.firstName = "Bill";
t.mi = "E";
t.lastName = "Boyd";

//These functions will be treated as properties
t.nickName = function() { return "Bubba"; }
t.fullName = function() { return this.firstName + " " + this.mi + ". " + this.lastName; }

var mop = {};
mop.get = function(thisObj,propName) {
   if ((typeof thisObj[propName]) == 'function') {
      return thisObj[propName]();
   }
   else return thisObj[propName];
}
t.__metaobject__ = mop;

print(t.firstName + "'s full name is " + t.fullName + ", but his friends know him as " + t.nickName);




