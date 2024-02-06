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
                console.error("Error fetching gain weight:", err);
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
        const gainData = req.body;
        gainmodel.create(gainData, function(err, result) {
            if (err) {
                console.error("Error creating gain weight:", err);
                res.status(500).json({ error: "Internal server error" });
                return;
            }
            res.status(201).json(result);
        });
    },

    updateGainWeight: function(req, res) {
        const gainId = req.params.id;
        const newData = req.body;
        gainmodel.update(gainId, newData, function(err, result) {
            if (err) {
                console.error("Error updating gain weight:", err);
                res.status(500).json({ error: "Internal server error" });
                return;
            }
            res.status(200).json(result);
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
            res.status(204).end();
        });
    }
}
