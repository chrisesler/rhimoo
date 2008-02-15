// Modifications to give the Array class the car/cdr abilities of Lisp.
Array.prototype.car = function() {
   return this[0];
}
Array.prototype.cdr = function() {
   return this.slice(1);
}

var mop = {};
/**
   This will give more advanced list functions, like cadar or caar.
   However, unlike in Lisp, there will be no limit
   to the available methods.  'caadaaddadaadaaddadr' could be called
   if the programmer so decided (and had a really sick sense of humor).
*/
mop.get = function(thisObj,propName) {
  if (propName.match(/^c(a|d)(a|d)+r$/)) {
     var list = thisObj;
     return function() {
        var chars = propName.match(/a|d/g).reverse();
        for (var i=0; i<chars.length; i++) {
           var op = chars[i];
           if (op === 'a') {
              list = list.car();
           }
           else if (op === 'd') {
              list = list.cdr();
           }
        }
        return list;
     }
  }
  else return thisObj[propName];
}

var list = [[0, [1, 2], 3], 4];
list.__metaobject__ = mop;
print(list.car());
print(list.caadar()); //prints 1