import db from "../config/db";
import uuid from "uuid/v4";
import { Property } from "../types";

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

export function updateProperty(property: Partial<Property>) {
  const { id, ...propertyUpdate } = property;

  return new Promise((resolve, reject) => {
    db.query(
      `update property set ? where id = ?`,
      [propertyUpdate, id],
      (error, _results, _fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(true);
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
          resolve(true);
        }
      }
    );
  });
}

export function findProperty(property: Partial<Property>) {
  return new Promise((resolve, reject) => {
    db.query(
      "select * from property where ?",
      property,
      (error, results, _fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      }
    );
  });
}
