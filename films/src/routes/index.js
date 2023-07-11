const { Router } = require("express");
const { getFilms, createFilms } = require("../controllers");

const router = Router();

router.get("/films", getFilms);

router.post("/films", createFilms);

module.exports = router;
