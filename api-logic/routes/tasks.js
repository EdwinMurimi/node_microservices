const express = require("express");

const router = express.Router();

const {
  getTasksHandler,
  getTaskHandler,
  createTaskHandler,
  deleteTaskHandler,
} = require("../controllers");

router.get("/:project_id", getTasksHandler);
router.get("/:project_id/:task_id", getTaskHandler);
router.delete("/:project_id/:task_id", deleteTaskHandler);
router.post("/", createTaskHandler);

module.exports = router;
