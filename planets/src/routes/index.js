const { Router } = require("express");
const { getPlanets, createPlanets } = require("../controllers");

const router = Router();

router.get("/planets", getPlanets);

router.post("/planets", createPlanets);

module.exports = router;
