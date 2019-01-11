"use strict";
const db = require("../test-db");

module.exports.up = function(next) {
  let query = `
      alter table
        property
      add
        column agentId varchar(255) not null;
    `;

  db.query(query, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    } else {
      next();
    }
  });
};

module.exports.down = function(next) {
  db.query(
    `
    alter table
      property
    drop
      column agentId;
    `,
    function(err) {
      if (err) {
        console.log(err.message);
      } else {
        next();
      }
    }
  );
};
