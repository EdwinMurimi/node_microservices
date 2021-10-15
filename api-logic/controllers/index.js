const {
  getTasksHandler,
  getTaskHandler,
  createTaskHandler,
  deleteTaskHandler,
} = require("./tasks");
const {
  getProjectsHandler,
  getProjectHandler,
  createProjectHandler,
  deleteProjectHandler,
} = require("./projects");
const { getUsersHandler, getUserHandler } = require("./users");

module.exports = {
  getTasksHandler,
  getTaskHandler,
  createTaskHandler,
  deleteTaskHandler,
  getProjectsHandler,
  getProjectHandler,
  createProjectHandler,
  deleteProjectHandler,
  getUsersHandler,
  getUserHandler,
};
