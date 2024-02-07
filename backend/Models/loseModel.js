// losemodel.js
const connection = require("../Database/index2");

module.exports = {
    getAll: function(callback) {
        const query = "SELECT * FROM loseweight";
        connection.query(query, function(err, results) {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, results);
        });
    },

    getByName: function(Name, callback) {
        const query = "SELECT * FROM loseweight WHERE Name = ?";
        connection.query(query, [Name], function(err, results) {
            if (err) {
                callback(err, null);
                return;
            }
            if (results.length === 0) {
                callback(null, null);
                return;
            }
            callback(null, results[0]);
        });
    },

    create: function(data, callback) {
        const query = "INSERT INTO loseweight SET ?";
        connection.query(query, data, function(err, results) {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, results);
        });
    },

    update: function(id, data, callback) {
        const query = "UPDATE loseweight SET ? WHERE id = ?";
        connection.query(query, [data, id], function(err, results) {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, results);
        });
    },

    delete: function(id, callback) {
        const query = "DELETE FROM loseweight WHERE id = ?";
        connection.query(query, [id], function(err, results) {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, results);
        });
    }
}
