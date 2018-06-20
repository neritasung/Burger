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
    create: function (tableInput, column, burger_name, cb) {
        var queryString = 'INSERT INTO ' + tableInput + '(' + column + ') VALUES (?)';

        connection.query(queryString, burger_name, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    // Update burgers
    update: function (tableInput, column, colVals, condition, cb) {
        var queryString = 'UPDATE ' + tableInput + ' SET ' + col + '=?' + 'WHERE ' + condition + '=?';
        
        connection.query(queryString, [colVal], function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
};

// Export the orm object for the model.
module.exports = orm;
