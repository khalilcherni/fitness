// gainRoutes.js
const express = require("express");
const router = express.Router();
const gainController = require("../controllers/gainController");

router.get("/getAll", gainController.getAllGainWeight);

router.get("/:name", gainController.getGainWeightByName);

// POST create a new gain weight
router.post("/add", gainController.createGainWeight);

// PUT update an existing gain weight
router.put("/:id", gainController.updateGainWeight);

// DELETE delete an existing gain weight
router.delete("/:id", gainController.deleteGainWeight);

module.exports = router;
