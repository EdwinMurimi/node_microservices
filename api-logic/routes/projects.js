const express = require("express");

const router = express.Router();

const {
  getProjectsHandler,
  getProjectHandler,
  createProjectHandler,
  deleteProjectHandler,
} = require("../controllers");

router.get("/", getProjectsHandler);
router.get("/:project_id", getProjectHandler);
router.delete("/:project_id", deleteProjectHandler);
router.post("/", createProjectHandler);

module.exports = router;
