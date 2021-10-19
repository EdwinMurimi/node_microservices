const { v4: uuidv4 } = require("uuid");

const db = require("../config");
const { projectValidation } = require("../validation");
const { parseResults } = require("../helpers");

const getProjectsHandler = async (req, res) => {
  let results = await db.execute("GetProjects");

  const projects = await parseResults(
    results,
    false,
    "No Projects are available"
  );

  return res.status(200).send({ projects });
};

const getProjectHandler = async (req, res) => {
  const { project_id } = req.params;

  let results = await db.execute("GetProject", {
    project_id,
  });

  const project = await parseResults(
    results,
    true,
    `No project with project id: ${project_id}`
  );

  return res.status(200).send({ project });
};

const createProjectHandler = async (req, res) => {
  const { error } = projectValidation(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  const id = uuidv4();

  const { project_name, project_start, project_end } = req.body;

  try {
    await db.execute("createNewProject", {
      id,
      project_name,
      project_start,
      project_end,
    });

    return res.send({ message: "Project created successfully" });
  } catch (err) {
    return res.status(500).send({ error, message: "Internal Server Error" });
  }
};

const deleteProjectHandler = async (req, res) => {
  const { project_id } = req.params;

  const { recordset } = await db.query(
    `SET NOCOUNT ON;
     SELECT is_deleted FROM dbo.projects WHERE _id = '${project_id}'`
  );

  const is_actually_deleted = recordset[0].is_deleted;

  if (is_actually_deleted)
    return res.status(404).send({
      message: `Project with project id ${project_id} does not exist`,
    });

  try {
    await db.execute("ProjectDelete", {
      project_id,
    });

    return res.status(200).send({ message: "Project deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error, message: "Internal Server Error" });
  }
};

module.exports = {
  getProjectsHandler,
  createProjectHandler,
  getProjectHandler,
  deleteProjectHandler,
};
