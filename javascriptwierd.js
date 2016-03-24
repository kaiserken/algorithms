"use strict";

var Person  = function(firstname, lastname, age){
  this.firstname  = firstname;
  this.lastname = lastname;
  this.age = age;

};

Person.prototype.decades = function(){
  return this.age/10;
};

var ken  = new Person("Ken", "Kaiser", 45);
ken.decades();
console.log(ken.decades());
