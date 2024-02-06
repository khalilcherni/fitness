const connection = require("../Database/index2");

module.exports = {
  getAll: function(callback) {
    const sql = "SELECT * FROM `gainweight`"; // Change from `cultural_places` to `gainweight`
    connection.query(sql, function(error, results) {
      callback(error, results);
    });
  },

  getOneById: function(gainWeightId, callback) { // Change from getOneByName to getOneById
    const sql = "SELECT * FROM `gainweight` WHERE id=?"; // Change from `cultural_places` to `gainweight`
    connection.query(sql, [gainWeightId], function(error, results) {
      callback(error, results[0]);
    });
  },

  update: function(gainWeightId, updateGainWeight, callback) { // Change from culturalId to gainWeightId
    const {
      name,
      description,
      type,
      calories,
      // other fields as needed
    } = updateGainWeight;

    const sql =
      "UPDATE `gainweight` SET name=?, description=?, type=?, calories=? WHERE id=?"; // Change from `cultural_places` to `gainweight`
    
    connection.query(
      sql,
      [name, description, type, calories, gainWeightId], // Change from culturalId to gainWeightId
      function(error, results) {
        callback(error, results);
      }
    );
  },

  add: function(gainWeightData, callback) {
    const sql = "INSERT INTO `gainweight` SET ?"; // Change from `cultural_places` to `gainweight`
    connection.query(sql, gainWeightData, function(error, results) {
      callback(error, results);
    });
  },

  delete: function(gainWeightId, callback) {
    const sql = "DELETE FROM `gainweight` WHERE id=?"; // Change from `cultural_places` to `gainweight`
    connection.query(sql, [gainWeightId], function(error, results) {
      callback(error, results);
    });
  },
};
