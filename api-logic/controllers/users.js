const db = require("../config");

const getUsersHandler = async (req, res) => {
  let { recordset } = await db.execute("GetAllUsers");

  res.send({ users: recordset });
};

const getUserHandler = async (req, res) => {
  const { user_Id } = req.params;

  try {
    let { recordset } = await db.execute("GetAUser", {
      user_Id,
    });

    if (recordset.length === 0)
      return res
        .status(404)
        .send({ message: `User with user ID ${user_Id} not found` });

    return res.send({ user: recordset[0] });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = {
  getUsersHandler,
  getUserHandler,
};
