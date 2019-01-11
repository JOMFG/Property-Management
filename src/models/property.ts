import { check } from "express-validator/check";
import * as uuid from "uuid/v4";
import db from "../config/db";

export type Property = {
  id: string;
  price: number;
  city: string;
  address: string;
  description: string;
};

export const postValidator = [
  check("price").isNumeric(),
  check("city").isString(),
  check("address").isString(),
  check("description").isString()
];

export const putValidator = [
  check("price")
    .isNumeric()
    .optional(),
  check("city")
    .isString()
    .optional(),
  check("address")
    .isString()
    .optional(),
  check("description")
    .isString()
    .optional()
];

export function saveProperty(propertyPartial: Property) {
  const property = {
    ...propertyPartial,
    id: uuid()
  };

  return new Promise((resolve, reject) => {
    db.query(
      "insert into property set ?",
      property,
      (error, _results, _fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(property);
        }
      }
    );
  });
}

export function updateProperty(property: Property) {
  const { id, ...propertyUpdate } = property;

  return new Promise((resolve, reject) => {
    db.query(
      `update property set ? where id = ?`,
      [propertyUpdate, id],
      (error, _results, _fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(property);
        }
      }
    );
  });
}

export function removeProperty(id: string) {
  return new Promise((resolve, reject) => {
    db.query(
      `delete from property where id = ?`,
      id,
      (error, _results, _fields) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      }
    );
  });
}

export function findProperty(id: string) {
  return new Promise((resolve, reject) => {
    db.query(
      "select * from property where ?",
      { id },
      (error, results, _fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0]);
        }
      }
    );
  });
}
