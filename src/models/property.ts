import { db } from "../config/db";
import { check, validationResult } from 'express-validator/check';
import * as uuid from 'uuid/v4';

export type Property = {
  id: string;
  price: number;
  city: string;
  address: string;
  description: string;
};


export const validator = [
  check('price').isNumeric(),
  check('city').isString(),
  check('address').isString(),
  check('description').isString(),
]


export function saveProperty(propertyPartial: Property) {
  const property = { 
    ...propertyPartial,
    id: uuid(),
  }
  return new Promise((resolve, reject) => {
    db.query(
      "insert into property set ?",
      property,
      (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(property);
        }
      }
    );
  });
}
