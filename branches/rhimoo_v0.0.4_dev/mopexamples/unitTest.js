var numTests = 0;
var testsPassed = 0;
function test(passed, testDescription) {
  if (passed) {
    testsPassed++;
    print ("-pass: " + testDescription);
  }
  else print("***FAILED***: " + testDescription)
  numTests++;
}

/**
 * This is used for testing the MOP.
 */
var mop = {};
mop.has = function(thisObj,prop) {
  if (thisObj[prop]) return true;
  else return false;
}
mop.get = function(thisObj,prop) {
  if (prop == 'marco') return 'polo';
  else return thisObj[prop];
}
mop.set = function(thisObj,prop,value) {
  if (prop != 'foo') thisObj[prop] = value;
}
mop.remove = function(thisObj,prop) {
  if (prop != 'foo') delete thisObj[prop];
}
mop.getIds = function(thisObj) {
  var ids = [ 'marco' ];
  for (var ind in thisObj) {
    if (ind != 'mickey') ids.push(ind);
  }
  return ids;
}
//This will make this mop used for all objects.
Object.prototype.__metaobject__ = mop;

//Some meta-functionality must live within the constructor.
var mop2 = {};
mop2.hasInstanceOf = function(thisObj,instance) {
  if (instance.mickey == 'mouse') return true;
  else return (instance instanceof thisObj);
}
function Employee(){};
Employee.__metaobject__ = mop2;


var o = { foo:'bar'};

//Testing get
test(o.foo == 'bar', "Get existing property");
test(o.marco == 'polo', "Get missing property intercept");
test(o.notThere == undefined, "Get undefined property");

//Testing set
o.foo = 'not bar';
test(o.foo == 'bar', "Prevent setting of property");
o.pp = "Ya, you know me";
test(o.pp = "Ya, you know me", "Add property");
o.pp = "Stupid song";
test(o.pp = "Stupid song", "Change property");

//Testing remove
delete o.pp;
test(o.pp == undefined, "Delete property");
delete o.foo;
test(o.foo == 'bar');

//Test overriding MOP
var ids = {};
var overrideMop = {};
overrideMop.get = function(thisObj,prop) {
  if (thisObj.hasOwnProperty(prop) || prop == 'length') {
    return thisObj[prop];
  }
  return undefined; 
}

test(ids.marco == 'polo', "Verifying MOP is enabled");
ids.__metaobject__ = overrideMop;
test(ids.marco == undefined, "Overriding MOP");

//Testing get ids
o.mickey = 'mouse';
var length = 0;
for (var i in o) {
  ids[i] = o[i];
  length++;
}
test(length == 2, "Testing count of ids");
test(ids['foo'] == 'bar', "Getting current id from list");
test(ids['marco'] == 'polo', "Adding id to list");
test(ids['mickey'] == undefined, "Suppressing id from enumerable list");

//Testing instanceof
test(o instanceof Employee, "Changing 'instanceof' behavior");
test(!(ids instanceof Employee), "Verifying 'instanceof' rejects normal non-emps");
var emp = new Employee();
test(emp instanceof Employee, "Verifying 'instanceof' accepts emps");

//Report results
print("---TEST RESULTS---");
if (numTests == testsPassed) print('!!!SUCCESS!!!')
print(numTests + " tests attempted.");
print(testsPassed + " tests succeeded.");

