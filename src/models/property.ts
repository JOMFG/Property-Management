import { db } from "../config/db";
import { check, validationResult } from 'express-validator/check';

export type Property = {
  id: string;
  price: number;
  city: string;
  address: string;
  description: string;
};


export const validator = [
  check('id').isString(),
  check('price').isNumeric(),
  check('city').isString(),
  check('address').isString(),
  check('description').isString(),
]


export function saveProperty(property: Property) {
  return new Promise((resolve, reject) => {
    db.query(
      "insert into property set ?",
      property,
      (error, results, fields) => {
        if (error) {
          reject(error.message);
        } else {
          resolve(property);
        }
      }
    );
  });
}
