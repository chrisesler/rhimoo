function Employee(firstName, lastName, salary) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.salary = salary;
}

var t = new Employee('Tom', 'Austin', 1000000);
print(t.firstName + " " + t.lastName + " $" + t.salary);

//Now we want to make salary read only
var mop = {};
mop.set = function(thisObj,prop,value) {
  if (prop == 'salary') {
    throw new Error('Warning: Salary is a read-only property');
  }
  thisObj[prop]=value;
}

t.__metaobject__ = mop;

//This will print an error and the salary will not be changed.
try {
  t.salary = 999999;
}
catch (e) {
  print(e);
}
print("After an attempt to change the salary, it is: $" + t.salary);

//Change salary to use baseSalary and bonusPay
t.baseSalary = 1000000;
t.bonusPay = 500;
t.__metaobject__.get = function(thisObj,prop) {
  if (prop == 'salary') {
    return thisObj.baseSalary + thisObj.bonusPay;
  }
  else return thisObj[prop];
}
print("Old Salary: $" + t.salary);
t.bonusPay += 2000;
print("New Salary: $" + t.salary);