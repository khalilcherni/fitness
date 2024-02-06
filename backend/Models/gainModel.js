
const connection = require("../Database/index2");
const connection = require("../Database/index");


module.exports = {
    getAll: function(callback) {
        const query = "SELECT * FROM gainweight";
        connection.query(query, function(err, results) {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, results);
        });
    },

    getByName: function(name, callback) {
        const query = "SELECT * FROM gainweight WHERE name = ?";
        connection.query(query, [name], function(err, results) {
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
        const query = "INSERT INTO gainweight SET ?";
        connection.query(query, data, function(err, results) {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, results);
        });
    },

    update: function(id, data, callback) {
        const query = "UPDATE gainweight SET ? WHERE id = ?";
        connection.query(query, [data, id], function(err, results) {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, results);
        });
    },

    delete: function(id, callback) {
        const query = "DELETE FROM gainweight WHERE id = ?";
        connection.query(query, [id], function(err, results) {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, results);
        });
    }
}
