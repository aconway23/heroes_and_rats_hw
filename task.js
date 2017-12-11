const Task = function (difficulty, urgency, reward, completed) {
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.completed = completed;
}

Task.prototype.difficulty = function () {
  console.log("Tough");
}

Task.prototype.urgency = function () {
  console.log("Critical");
}

Task.prototype.reward = function () {
  console.log("Extra Web");
}

Task.prototype.completed = function() {
  for (let task of this.completed) {
    if (this.completed === true) {
      return true;

    } else {
      return ("Task not completed");
    }
  }

}

module.exports = Task;
