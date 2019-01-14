import db from "../config/db";
import uuid from "uuid/v4";
import { Property, InputPropertySearch, PriceFloatFilterInput } from "../types";

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

export function findProperty(
  property: Partial<InputPropertySearch>
): Promise<Property[]> {
  return new Promise((resolve, reject) => {
    const [query, values] = buildQuery(property);
    db.query(
      "select * from property where " + query,
      values,
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

function buildRangeQuery(rangeObject: PriceFloatFilterInput): [string, number] {
  if (rangeObject.eq) {
    return [" = ", rangeObject.eq];
  }

  if (rangeObject.lt) {
    return [" < ", rangeObject.lt];
  }

  if (rangeObject.le) {
    return [" <= ", rangeObject.le];
  }

  if (rangeObject.gt) {
    return [" > ", rangeObject.gt];
  }

  if (rangeObject.ge) {
    return [" >= ", rangeObject.ge];
  }
}

function buildQuery(partialProperty: Partial<InputPropertySearch>) {
  let values: Array<string | number> = [];
  let query: Array<string> = [];

  const { price } = partialProperty;

  if (partialProperty.id) {
    query = query.concat("id = ?");
    values = values.concat(partialProperty.id);
  }

  if (partialProperty.address) {
    query = query.concat("address = ?");
    values = values.concat(partialProperty.address);
  }

  if (partialProperty.propertyType) {
    query = query.concat("propertyType = ?");
    values = values.concat(partialProperty.propertyType);
  }

  if (partialProperty.agentId) {
    query = query.concat("agentId = ?");
    values = values.concat(partialProperty.agentId);
  }

  if (price) {
    const [priceQuery, priceValue] = buildRangeQuery(price);
    query = query.concat(`price ${priceQuery} ?`);
    values = values.concat(priceValue);
  }

  return [query.join(" and "), values];
}
