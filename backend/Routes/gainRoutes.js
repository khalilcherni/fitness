// gainweightRoutes.js
const express = require("express");
const router = express.Router();
const gainweightController = require("../controllers/gainController.js"); // Update the controller import

router.get("/getAll", gainweightController.getAllGainWeight); // Update the controller method
router.get("/:id", gainweightController.getOneGainWeight); // Update the controller method and parameter
router.post("/add", gainweightController.addGainWeight); // Update the controller method
router.put("/update/:id", gainweightController.updateGainWeight); // Update the controller method and parameter
router.delete("/delete/:id", gainweightController.deleteGainWeight); // Update the controller method and parameter

module.exports = router;
