const { Router } = require("express");
const { getCharacters } = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/characters", getCharacters);

module.exports = router;
