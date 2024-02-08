// loseweightController.js
const losemodel = require('../Models/losemodel');

module.exports = {
    getAllLoseWeight: function(req, res) {
        losemodel.getAll(function(err, results) {
            if (err) {
                console.error("Error fetching lose weights:", err);
                res.status(500).json({ error: "Internal server error" });
                return;
            }
            res.status(200).json(results);
        });
    },

    getLoseWeightByName: function(req, res) {
        const loseName = req.params.Name;
        losemodel.getByName(loseName, function(err, result) {
            if (err) {
                console.error("Error fetching lose weight by Name:", err);
                res.status(500).json({ error: "Internal server error" });
                return;
            }
            if (!result) {
                res.status(404).json({ error: "Lose weight not found" });
                return;
            }
            res.status(200).json(result);
        });
    },

    createLoseWeight: function(req, res) {
        const { Name, type, calories, description, image } = req.body;
        losemodel.create({ Name, type, calories, description, image }, function(err, result) {
            if (err) {
                console.error("Error creating lose weight:", err);
                res.status(500).json({ error: "Internal server error" });
                return;
            }
            res.status(201).json({ message: "Lose weight created successfully", id: result.insertId });
        });
    },

    updateLoseWeight: function(req, res) {
        const loseId = req.params.id;
        const { Name, type, calories, description, image } = req.body;
        losemodel.update(loseId, { Name, type, calories, description, image }, function(err, result) {
            if (err) {
                console.error("Error updating lose weight:", err);
                res.status(500).json({ error: "Internal server error" });
                return;
            }
            if (result.affectedRows === 0) {
                res.status(404).json({ error: "Lose weight not found" });
                return;
            }
            res.status(200).json({ message: "Lose weight updated successfully" });
        });
    },

    deleteLoseWeight: function(req, res) {
        const loseId = req.params.id;
        losemodel.delete(loseId, function(err, result) {
            if (err) {
                console.error("Error deleting lose weight:", err);
                res.status(500).json({ error: "Internal server error" });
                return;
            }
            if (result.affectedRows === 0) {
                res.status(404).json({ error: "Lose weight not found" });
                return;
            }
            res.status(200).json({ message: "Lose weight deleted successfully" });
        });
    }
}
