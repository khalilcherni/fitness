// gainController.js
const gainmodel = require('../Models/gainmodel');

module.exports = {
    getAllGainWeight: function(req, res) {
        gainmodel.getAll(function(err, results) {
            if (err) {
                console.error("Error fetching gain weights:", err);
                res.status(500).json({ error: "Internal server error" });
                return;
            }
            res.status(200).json(results);
        });
    },

    getGainWeightByName: function(req, res) {
        const gainName = req.params.name;
        gainmodel.getByName(gainName, function(err, result) {
            if (err) {
                console.error("Error fetching gain weight by name:", err);
                res.status(500).json({ error: "Internal server error" });
                return;
            }
            if (!result) {
                res.status(404).json({ error: "Gain weight not found" });
                return;
            }
            res.status(200).json(result);
        });
    },

    createGainWeight: function(req, res) {
        const { name, type, calories, description, image } = req.body;
        gainmodel.create({ name, type, calories, description, image }, function(err, result) {
            if (err) {
                console.error("Error creating gain weight:", err);
                res.status(500).json({ error: "Internal server error" });
                return;
            }
            res.status(201).json({ message: "Gain weight created successfully", id: result.insertId });
        });
    },

    updateGainWeight: function(req, res) {
        const gainId = req.params.id;
        const { name, type, calories, description, image } = req.body;
        gainmodel.update(gainId, { name, type, calories, description, image }, function(err, result) {
            if (err) {
                console.error("Error updating gain weight:", err);
                res.status(500).json({ error: "Internal server error" });
                return;
            }
            if (result.affectedRows === 0) {
                res.status(404).json({ error: "Gain weight not found" });
                return;
            }
            res.status(200).json({ message: "Gain weight updated successfully" });
        });
    },

    deleteGainWeight: function(req, res) {
        const gainId = req.params.id;
        gainmodel.delete(gainId, function(err, result) {
            if (err) {
                console.error("Error deleting gain weight:", err);
                res.status(500).json({ error: "Internal server error" });
                return;
            }
            if (result.affectedRows === 0) {
                res.status(404).json({ error: "Gain weight not found" });
                return;
            }
            res.status(200).json({ message: "Gain weight deleted successfully" });
        });
    }
}
