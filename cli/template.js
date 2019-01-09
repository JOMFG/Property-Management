"use strict";
const db = require("../test-db");

module.exports.up = function(next) {
  let query = null; /** Placeholder */

  db.query(query, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    } else {
      next();
    }
  });
};

module.exports.down = function(next) {
  let query = null; /** Placeholder */

  db.query(query, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    } else {
      next();
    }
  });
};
