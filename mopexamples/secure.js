function Employee(firstName, lastName, salary) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.salary = salary;
  
  this.getName = function() { return firstName + " " + lastName; }
  //This variable temporarily allows us to modify variables as we will.
  var authorized = true;
  
  var mop = {};
  //This will make all properties read only
  mop.set = function(thisObj, propertyName, newVal) {
    if (authorized || (typeof newVal) == 'function') {
      thisObj[propertyName] = newVal;
    }
    else print("Sorry, " + propertyName + " is read-only.");
  }
  //This will make all properties private
  mop.get = function(thisObj, propertyName) {
    if (authorized || (typeof thisObj[propertyName]) == 'function') {
      return thisObj[propertyName];
    }
    print("Sorry, " + propertyName + " is private.");
    return null;
  }
  
  //These methods will allow us to lock or unlock the object at well. 
  this.unlock = function() { authorized = true; }
  this.lock = function() { authorized = false; }
  
  //The object is now locked down
  authorized = false;
  
  this.__metaobject__ = mop;
}

//This won't unlock it.
authorized = true;

var t = new Employee('Tom', 'Austin', 1000000);

//Using lock and unlock, we can still add methods.
t.printSalary = function() {
  t.unlock();
  print(t.salary);
  t.lock();
}
t.printSalary();

//If we break unlock, this won't work anymore.  It may be desireable to
// throw away the key sometimes, so to speak.
t.unlock = function(){};
t.printSalary(); // This will fail now.

//This will print the last name, but not the first name or salary.
print(t.getName() + " $" + t.salary);
