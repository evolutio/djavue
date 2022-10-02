const data = require("../data");
const accounts = require("./accounts");

function getMaxId(items) {
  return Math.max(...items.map((item) => item.id));
}

module.exports = {
  find: (req, res) => {
    const loggedUser = accounts.loginRequired(req, res);
    if (!loggedUser) {
      return;
    }
    const { id } = req.params;
    if (id != undefined) {
      const task = data.tasks.find((t) => t.id == id);
      if (!task || task.userId != loggedUser.id) {
        res.status(404).end();
        return;
      }
      res.send(task);
      return;
    }
    const response = {
      todos: data.tasks.filter((t) => t.userId == loggedUser.id),
    };
    res.send(response);
  },
  add: (req, res) => {
    const loggedUser = accounts.loginRequired(req, res);
    if (!loggedUser) {
      return;
    }
    const { description } = req.body;
    const id = getMaxId(data.tasks) + 1;
    const newTask = {
      id,
      description,
      userId: loggedUser.id,
    };
    data.tasks.push(newTask);
    res.send(newTask);
  },
};
