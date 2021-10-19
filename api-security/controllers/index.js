const bcrypt = require("bcryptjs");
const { v1: uuid } = require("uuid");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
require("dotenv").config();

const db = require("../config");
const encryptPassword = require("../helpers");
const { signInValidation, signUpValidation } = require("../validation");
const { parseResults } = require("../helpers");

const signUpHandler = async (req, res) => {
  const { error } = signUpValidation(req.body);

  if (error) return res.status(400).send({ message: error.details[0].message });

  const id = uuid();

  const { firstname, lastname, email } = req.body;

  const password = await encryptPassword(req.body.password);

  try {
    await db.execute("RegisterUser", {
      id,
      firstname,
      lastname,
      email,
      password,
    });

    res.send({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const signInHandler = async (req, res) => {
  const { error } = signInValidation(req.body);

  if (error) return res.status(400).send({ message: error.details[0].message });

  const { email, password } = req.body;

  const results = await db.execute("LoginUser", { email_address: email });

  const user = await parseResults(results, true, "Account does not exist");

  if (!user) return res.status(401).json({ message: "Account does not exist" });

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword)
    return res.status(400).json({ message: "Invalid Password" });

  const response = _.pick(user, ["_id", "email"]);

  jwt.sign({ response }, process.env.SECRETKEY, (err, token) => {
    if (err) return res.status(500).json({ message: "Internal Server Error" });
    return res.status(200).json({ response, token });
  });
};

module.exports = {
  signUpHandler,
  signInHandler,
};
