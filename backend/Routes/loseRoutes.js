// loseweightRoutes.js
const express = require("express");
const router = express.Router();
const loseweightController = require("../controllers/loseController.js");

router.get("/getAll", loseweightController.getAllLoseWeight);
router.get("/:name", loseweightController.getLoseWeightByName);
router.post("/add", loseweightController.createLoseWeight);
router.put("/:id", loseweightController.updateLoseWeight);
router.delete("/:id", loseweightController.deleteLoseWeight);

module.exports = router;
