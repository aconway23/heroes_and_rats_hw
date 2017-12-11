const Hero = function (name, health, food) {
  this.name = name;
  this.health = health;
  this.food = food;
  this.tasks = [];

}

// const spiderman = new Hero("Spiderman", 100, "Cherry Pie");
// spiderman.talk();

// Hero.prototype.talk = function () {
//   let talk = (`Hi! Just your friendly neighbourhood ${ this.name }`);
//   console.log(talk);
// }

// Hero.prototype.talk = function () {
//     name = 'Spiderman';
//   console.log(`Hi! Just your friendly neighbourhood ${ this.name}` );
// }
//
// talk();





// Hero.prototype.name = function () {
//   console.log("Spiderman");
// }
//
// Hero.prototype.health = function () {
//   console.log(100);
// }
//
// Hero.prototype.food = function () {
//   console.log("Cherry Pie");
// };

Hero.prototype.properties = function(hero) {
return [hero.name, JSON.stringify(hero.health), hero.food];
}


module.exports = Hero;
