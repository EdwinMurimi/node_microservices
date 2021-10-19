const express = require("express");

const { use } = require("../helpers");

const router = express.Router();

const {
  getProjectsHandler,
  getProjectHandler,
  createProjectHandler,
  deleteProjectHandler,
} = require("../controllers");

router.get("/", use(getProjectsHandler));
router.get("/:project_id", use(getProjectHandler));
router.delete("/:project_id", deleteProjectHandler);
router.post("/", createProjectHandler);

module.exports = router;
