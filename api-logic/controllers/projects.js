const { v4: uuidv4 } = require("uuid");

const db = require("../config");
const { projectValidation } = require("../validation");

const getProjectsHandler = async (req, res) => {
  try {
    let { recordset } = await db.execute("GetProjects");

    if (recordset.length === 0)
      return res.status(404).send({
        message: `No Projects are available`,
      });

    return res.status(200).send({ projects: recordset });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

const getProjectHandler = async (req, res) => {
  const { project_id } = req.params;

  try {
    let { recordset } = await db.execute("GetProject", {
      project_id,
    });

    if (recordset.length === 0)
      return res
        .status(404)
        .send({ message: `No project with project id: ${project_id}` });

    return res.status(200).send({ project: recordset[0] });
  } catch (error) {
    return res.status(500).send({ error, message: "Internal Server Error" });
  }
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
