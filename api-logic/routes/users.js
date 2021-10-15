const express = require("express");

const router = express.Router();

const { getUsersHandler, getUserHandler } = require("../controllers");

router.get("/", getUsersHandler);
router.get("/:user_Id", getUserHandler);

module.exports = router;
