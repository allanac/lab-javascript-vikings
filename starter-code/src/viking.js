// Soldier
function Soldier (strength, health) {
  this.strength = strength;
  this.health = health;
}

Soldier.prototype.attack = function () {
  return this.strength;
}
Soldier.prototype.receiveDamage = function(damage){
   this.health = this.health - damage;
}

// Viking
function Viking (name, health, strength) {
  Soldier.call (this, name, health, strength);
}
Viking.prototype = Object.create(Soldier.protoype);

Viking.protoype.attack = function () {
  return this.strength;
}

Viking.prototype.receiveDamage = function(damage){

  this.health = this.health - damage;
  return this.health;

  if (this.health <= 0) {
    console.log (this.name + "has died in the act of combat")
  }
  else {
  console.log (this.name + "has received" + damage + "points of damage")}
};



// Saxon
function Saxon (health, strength) {
  Soldier.call (this, health, strength);
}
Soldier.prototype = Object.create(Soldier.prototype);
Soldier.prototype.attack = function (){
  return this.strength;
}

Soldier.prototype.receiveDamage = function (damage){


  console.log ("A" + this.name + "has received " + damage + "points of damage")
  console.log("A" + this.name + "has died in combat" )
};

// War
function War () {}
