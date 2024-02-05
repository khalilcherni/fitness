// culturalController.js
const cultural = require('../Models/gainModel');

module.exports = {
  getAllCultural: function(req, res) {
    cultural.getAll(function(err, results) {
      if (err) res.status(500).send(err);
      else r// gainweightController.js
      const gainweight = require('../Models/gainModel'); // Update the model import
      
      module.exports = {
        getAllGainWeight: function(req, res) {
          gainweight.getAll(function(err, results) {
            if (err) res.status(500).send(err);
            else res.json(results);
          });
        },
      
        getOneGainWeight: function(req, res) {
          const gainWeightId = req.params.id; // Change from name to id
          gainweight.getOneById(gainWeightId, function(err, result) {
            if (err) res.status(500).send(err);
            else if (!result) res.status(404).send('Gainweight place not found');
            else res.json(result);
          });
        },
      
        addGainWeight: function(req, res) {
          const gainWeightData = req.body;
          gainweight.add(gainWeightData, function(err, result) {
            if (err) res.status(500).send(err);
            else res.status(201).json(result);
          });
        },
      
        updateGainWeight: function(req, res) {
          const gainWeightId = req.params.id; // Change from name to id
          const updateGainWeight = req.body;
          gainweight.update(gainWeightId, updateGainWeight, function(err, results) {
            if (err) res.status(500).json({ error: 'Internal Server Error' });
            else {
              if (results.affectedRows > 0) {
                res.status(200).json({ message: 'Gainweight place updated successfully' });
              } else {
                res.status(404).json({ error: 'Gainweight place not found' });
              }
            }
          });
        },
      
        deleteGainWeight: function(req, res) {
          const gainWeightId = req.params.id; // Change from name to id
          gainweight.delete(gainWeightId, function(err, results) {
            if (err) res.status(500).json({ error: 'Internal Server Error' });
            else {
              if (results.affectedRows > 0) {
                res.status(200).json({ message: 'Gainweight place deleted successfully' });
              } else {
                res.status(404).json({ error: 'Gainweight place not found' });
              }
            }
          });
        },
      };
      es.json(results);
    });
  },

  getOneCultural: function(req, res) {
    const culturalName = req.params.name; // Change from id to name
    cultural.getOneByName(culturalName, function(err, result) {
      if (err) res.status(500).send(err);
      else if (!result) res.status(404).send('Cultural place not found');
      else res.json(result);
    });
  },

  addCultural: function(req, res) {
    const culturalData = req.body;
    cultural.add(culturalData, function(err, result) {
      if (err) res.status(500).send(err);
      else res.status(201).json(result);
    });
  },

  updateCultural: function(req, res) {
    const culturalId = req.params.place_id; // Change from name to place_id
    const updateCultural = req.body;
    cultural.update(culturalId, updateCultural, function(err, results) {
      if (err) res.status(500).json({ error: 'Internal Server Error' });
      else {
        if (results.affectedRows > 0) {
          res.status(200).json({ message: 'Cultural place updated successfully' });
        } else {
          res.status(404).json({ error: 'Cultural place not found' });
        }
      }
    });
  },

  deleteCultural: function(req, res) {
    const culturalId = req.params.place_id; // Change from name to place_id
    cultural.delete(culturalId, function(err, results) {
      if (err) res.status(500).json({ error: 'Internal Server Error' });
      else {
        if (results.affectedRows > 0) {
          res.status(200).json({ message: 'Cultural place deleted successfully' });
        } else {
          res.status(404).json({ error: 'Cultural place not found' });
        }
      }
    });
  },
};