"use strict";
const db = require("../test-db");

module.exports.up = function(next) {
  let createTodos = `
    create table property(
        id varchar(255) not null,
        price decimal(6,2) not null,
        city varchar(255) not null,
        address varchar(255) not null,
        description varchar(255) not null,
        primary key (id)
    )`;

  db.query(createTodos, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    } else {
      next();
    }
  });
};

module.exports.down = function(next) {
  db.query(`drop table property`, function(err) {
    if (err) {
      console.log(err.message);
    } else {
      next();
    }
  });
};
