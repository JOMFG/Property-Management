"use strict";
const db = require("../test-db");

module.exports.up = function(next) {
  let query = `
    create table agent(
        id varchar(255) not null,
        email varchar(255) not null,
        address varchar(255) not null,
        primary key (id)
    );
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
  db.query(`
    drop table agent
    `, function(err) {
    if (err) {
      console.log(err.message);
    } else {
      next();
    }
  });
};
