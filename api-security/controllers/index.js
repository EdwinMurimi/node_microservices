const bcrypt = require("bcryptjs");
const { v1: uuid } = require("uuid");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
require("dotenv").config();

const db = require("../config");
const encryptPassword = require("../helpers");
const { signInValidation, signUpValidation } = require("../validation");

const signUpHandler = async (req, res) => {
  const { error } = signUpValidation(req.body);

  if (error) return res.status(400).send({ message: error.details[0].message });

  const _id = uuid();

  const { firstname, lastname, email } = req.body;

  const password = await encryptPassword(req.body.password);

  const sql = `INSERT INTO [dbo].[users]
      (_id, first_name, last_name, email, password)
    VALUES
      ('${_id}', '${firstname}', '${lastname}', '${email}', '${password}')`;

  const result = await db.query(sql);

  console.log(result);
};

const signInHandler = async (req, res) => {
  const { error } = signInValidation(req.body);

  if (error) return res.status(400).send({ message: error.details[0].message });

  const { email, password } = req.body;

  // TODO: check out the json response thing on MSSQL
  const sql = `SELECT * FROM users WHERE email = '${email}' FOR JSON AUTO;`;

  const { recordset } = await db.query(sql);

  const user = recordset[0];

  if (!user) return res.status(401).json({ message: "Account does not exist" });

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword)
    return res.status(400).json({ message: "Invalid Password" });

  const response = _.pick(user, ["ID", "email"]);

  jwt.sign({ response }, process.env.SECRETKEY, (err, token) => {
    if (err) return res.status(500).json({ message: "Internal Server Error" });
    return res.status(200).json({ response, token });
  });
};

module.exports = {
  signUpHandler,
  signInHandler,
};
