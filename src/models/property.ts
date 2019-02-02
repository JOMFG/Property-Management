import db from "../config/db";
import uuid from "uuid/v4";
import { Property, InputPropertySearch, FloatFilterInput } from "../types";

type PROPERTY_COL_LIST = Exclude<keyof Property, "agent">;

const TABLE = "property";
const PROPERTY_COLS: { [P in PROPERTY_COL_LIST]: string } = {
  id: "id",
  address: "address",
  city: "city",
  price: "price",
  description: "description",
  propertyType: "propertyType",
  agentId: "agentId"
};

export function saveProperty(propertyPartial: Property) {
  const property = {
    ...propertyPartial,
    id: uuid()
  };

  return db
    .insert(property)
    .into(TABLE)
    .then(() => property);
}

export function updateProperty(property: Partial<Property>) {
  const { id, ...propertyUpdate } = property;

  return new Promise((resolve, reject) => {
    return db
      .update(propertyUpdate)
      .from(TABLE)
      .where({ id })
      .thenReturn(true);
  });
}

export function removeProperty(id: string) {
  return db
    .delete()
    .where({ id })
    .from(TABLE)
    .thenReturn(true);
}

export function findProperty(property: Partial<InputPropertySearch>) {
  const queryBuilder = db.select().from(TABLE);
  if (property.id) {
    queryBuilder.where(PROPERTY_COLS.id, property.id);
  }

  if (property.city) {
    queryBuilder.andWhere(PROPERTY_COLS.city, property.city);
  }

  if (property.propertyType) {
    queryBuilder.andWhere(PROPERTY_COLS.propertyType, property.propertyType);
  }

  if (property.agentId) {
    queryBuilder.andWhere(PROPERTY_COLS.agentId, property.agentId);
  }

  if (property.price) {
    queryBuilder.andWhere(
      PROPERTY_COLS.price,
      ...buildRangeQuery(property.price)
    );
  }

  return queryBuilder.then((result: Property[]) => result);
}

function buildRangeQuery(rangeObject: FloatFilterInput): [string, number] {
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
