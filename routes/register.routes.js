const express = require("express");
const router = express.Router();

const controller = require("../controller/registeration.controller");


router.post('/create',controller.createUser);

module.exports = router;