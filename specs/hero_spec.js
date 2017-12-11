const assert = require ('assert');
const Hero = require ('../hero.js');



describe('hero', function() {
  let hero;

  beforeEach(function() {
    hero = new Hero("Spiderman", 100, "Cherry Pie");
  })

  it('should have name', function() {
    assert.strictEqual(hero.name, "Spiderman");
  });

  it('should have health', function() {
    assert.strictEqual(hero.health, 100);
  });

  it('should have favourite food', function() {
    assert.strictEqual(hero.food, "Cherry Pie");
  });

  it('should have tasks', function() {
    assert.strictEqual(hero.tasks.length, 0);
  });

  it('should return properties as string', function() {
  assert.deepStrictEqual(hero.properties(hero), ["Spiderman", "100", "Cherry Pie"]);
 });

 // it('should be able to talk', function() {
 //   assert.strictEqual(hero.talk.name, "Hi! Just your friendly neighbourhood Spiderman");
 // });





});
