import { db } from "../config/db";

export type Property = {
  id: string;
  price: number;
  city: string;
  address: string;
  description: string;
};

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
