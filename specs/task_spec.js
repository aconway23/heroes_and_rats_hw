const assert = require ('assert');
const Task = require ('../task.js');


describe('task', function() {
  let task;

  beforeEach(function () {
    task = new Task("Tough", "Critical", "Extra Web");
  })

  it('should have difficulty level', function () {
    assert.strictEqual(task.difficulty, "Tough");
  });

  it('should have urgency level', function () {
    assert.strictEqual(task.urgency, "Critical");
  });

  it('should have reward', function () {
    assert.strictEqual(task.reward, "Extra Web");
  });

  it('should have task completed or not', function () {
    
    assert.strictEqual(task.completed, "Completed");
  })




});
