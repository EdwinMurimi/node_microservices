const { v4: uuidv4 } = require("uuid");

const db = require("../config");
const { taskValidation } = require("../validation");

const getTasksHandler = async (req, res) => {
  const { project_id } = req.params;

  try {
    let { recordset } = await db.execute("GetProjectTasks", { project_id });

    if (recordset.length === 0)
      return res.status(404).send({
        message: `No Tasks under Project with project ID: ${project_id}`,
      });

    return res.status(200).send({ tasks: recordset });
  } catch (error) {
    return res.status(500).send({ error, message: "Internal Server Error" });
  }
};

const getTaskHandler = async (req, res) => {
  const { project_id, task_id } = req.params;

  try {
    let { recordset } = await db.execute("getProjectTask", {
      project_id,
      task_id,
    });

    if (recordset.length === 0)
      return res
        .status(404)
        .send({ message: `No task with task id: ${task_id}` });

    return res.status(200).send({ task: recordset[0] });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

const createTaskHandler = async (req, res) => {
  const { error } = taskValidation(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  const id = uuidv4();

  const { user_id, project_id, task_name, task_start, task_end } = req.body;

  try {
    await db.execute("createNewTask", {
      id,
      user_id,
      project_id,
      task_name,
      task_start,
      task_end,
    });

    return res.send({ message: "Task created successfully" });
  } catch (err) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

const deleteTaskHandler = async (req, res) => {
  const { project_id, task_id } = req.params;

  const { recordset } = await db.query(
    `SET NOCOUNT ON;
     SELECT is_deleted FROM dbo.tasks WHERE project_id = '${project_id}' AND _id = '${task_id}'`
  );

  const is_actually_deleted = recordset[0].is_deleted;

  if (is_actually_deleted)
    return res
      .status(404)
      .send({ message: `Task with task id ${task_id} does not exist` });

  try {
    await db.execute("taskDelete", {
      project_id,
      task_id,
    });

    return res.status(200).send({ message: "Task deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = {
  getTasksHandler,
  getTaskHandler,
  createTaskHandler,
  deleteTaskHandler,
};
