const express = require("express");

const router = express.Router();

const { signInHandler, signUpHandler } = require("../controllers");

router.post("/signin", signInHandler);
router.post("/signup", signUpHandler);

module.exports = router;
