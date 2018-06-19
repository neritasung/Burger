// Require connections.js file
var connection = require("./connection.js");


// orm object

var orm = {
    // search for all results
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    //   Add burgers
    create: function (tableInput, column, burger_info, cb) {
        var queryString = 'INSERT INTO ' + table + '(' + column + ') VALUES (?)';

        connection.query(queryString, burger_info, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    // Update burgers
    update: function (table, column, colVals, condition, cb) {
        var queryString = 'UPDATE ' + table + ' SET ' + col + '=?' + 'WHERE ' + condition + '=?';
        
        connection.query(queryString, [colVal], function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    delete: function (table, condition, cb) {
        var queryString = 'DELETE FROM ' + table + ' WHERE ' + condition + '=?';

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

// Export the orm object for the model.
module.exports = orm;
