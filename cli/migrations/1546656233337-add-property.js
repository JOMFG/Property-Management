"use strict";
const db = require("../test-db");

module.exports.up = function(next) {
  db.connect(err => {
    let createTodos = `
    create table property(
        id varchar(255) not null,
        price decimal(6,2) not null,
        city varchar(255) not null,
        address varchar(255) not null,
        description varchar(255) not null,
        primary key (id)
    )`;
    if (err) {
      console.log(err);
    }

    db.query(createTodos, function(err, results, fields) {
      if (err) {
        console.log(err.message);
      } else {
        next();
      }
    });

    db.end(function(err) {
      if (err) {
        return console.log(err.message);
      }
    });
  });
};

module.exports.down = function(next) {
  db.connect(err => {
    db.query(`drop table property`, function(err) {
      if (err) {
        console.log(err.message);
      } else {
        next();
      }
    });

    db.end(function(err) {
      if (err) {
        return console.log(err.message);
      }
    });
  });
};
