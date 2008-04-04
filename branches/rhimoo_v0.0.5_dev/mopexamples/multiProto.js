/**
 * Heroes are controlled by the user.
 */
function Hero(name, hitpoints) {
  this.name = name;
  this.hitpoints = hitpoints;
  this.experience = 0;
}

/**
 * NPCs are controlled by the computer.
 */
function NPC(name, hitpoints, experience, xpValue) {
  this.name = name;
  this.hitpoints = hitpoints;
  this.xpValue = xpValue;
  this.experience = 0;
}

/**
 * Allies help the hero.
 */
function Ally(name, hitpoints, experience, xpValue) {
  NPC.call(this, name, hitpoints, experience, xpValue);
}
Ally.prototype = new NPC();
Ally.prototype.move = function() {
  print(" (" + this.name + "'s action:  Help hero)");
}

/**
 * Villains attempt to harm the hero.
 */
function Villain(name, hitpoints, experience, xpValue) {
  NPC.call(this, name, hitpoints, experience, xpValue);
}
Villain.prototype = new NPC();
Villain.prototype.move = function() {
  print(" (" + this.name + "'s action:  Attack hero)");
}

/**
 * Wizards cast spells.  They can be heroes, allies, or villains.
 */
function Wizard() {
  this.spells = {
    detectMagic: function() { print('No magic detected'); }
  }
}
Wizard.prototype.castSpell = function(spellName) {
  if (this.spells[spellName]) {
    var spell = this.spells[spellName];
    return spell();
  }
}

/**
 * This is the metaobject needed for objects with multiple
 * prototype chains.
 */
var objMop = {};
objMop.getIds = function(thisObj) {
  var ids = []
  for (var ind in thisObj) {
    ids.push(ind);
  }
  if (thisObj.__proto__ instanceof Array) {
    for (var ind in thisObj.__proto__) {
      var proto = thisObj[ind];
      if (proto) {
        for (var name in proto.prototype) {
          if (!ids[name]) ids.push(name);
        }
      }
    }
  }
  return ids;
}
objMop.get = function(thisObj,prop) {
  if (thisObj[prop]) return thisObj[prop];
  else if (thisObj.__proto__ instanceof Array) {
    for (var ind in thisObj.__proto__) {
      var proto = thisObj.__proto__[ind];
      if (proto.prototype[prop]) {
        return proto.prototype[prop];
      }
    }
  }
  return thisObj[prop];
}

/**
 * This is the behavior needed for prototypes that
 * may be combined via multiple inheritance.
 */
var multiMop = {};
multiMop.set = function(thisObj,prop,val) {
  thisObj[prop] = val;
}
multiMop.hasInstanceOf = function(thisObj,instance) {
  if (instance.__proto__ instanceof Array) {
    for (var key in instance.__proto__) {
      var prot = instance.__proto__[key];
      if (prot == thisObj) return true;
    }
    return false;
  }
  //Note that instanceof can be used normally inside the method.
  else return (instance instanceof thisObj);
}
Wizard.__metaobject__ = multiMop;
Hero.__metaobject__ = multiMop;
Ally.__metaobject__ = multiMop;
Villain.__metaobject__ = multiMop;

var jason = new Hero("Jason", 10);
jason.divorce = function(wife) {
  wife.__proto__ = [Wizard, Villain];
}

var medea = new Ally("Medea", 4);
medea.__metaobject__ = objMop;
medea.__proto__ = [Ally, Wizard];
medea.spells = {
  old2new: function(ram) { print("'Look, the ram is young now!  Let's chop up father...'"); },
  makePay: function(ex) { print("'Dear gods, no...'"); }
};

if (medea instanceof Ally && medea instanceof Wizard && !(medea instanceof Villain)) {
  print("--Medea is an enchantress on Jason's side.--")
}
// Medea helps Jason.
medea.move();
// Medea tricks the daughters of Pelias.
medea.castSpell('old2new');
print();

jason.divorce(medea);
// Medea is no longer an ally, but she is still a Wizard
if (medea instanceof Villain && medea instanceof Wizard && !(medea instanceof Ally)) {
  print("--As a general rule, don't divorce a girl who has a history of cutting up your enemies.--")
}

// Medea's actions are now those of a villain, not a hero.
medea.move();
// Her other attributes, like magic, remain the same.
medea.castSpell('makePay');
