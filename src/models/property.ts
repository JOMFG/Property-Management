import db from "../lib/db";
import uuid from "uuid/v4";
import { Property, InputPropertySearch, FloatFilterInput } from "../types";

type PROPERTY_COL_LIST = Exclude<keyof Property, "agent">;

const PROPERTY_TABLE = "property";
const PROPERTY_TABLE_COL_NAMES: { [P in PROPERTY_COL_LIST]: string } = {
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
    .into(PROPERTY_TABLE)
    .then(() => property);
}

export function updateProperty(property: Partial<Property>) {
  const { id, ...propertyUpdate } = property;

  return db
    .update(propertyUpdate)
    .from(PROPERTY_TABLE)
    .where({ id })
    .thenReturn(true);
}

export function removeProperty(id: string) {
  return db
    .delete()
    .where({ id })
    .from(PROPERTY_TABLE)
    .thenReturn(true);
}

export function findProperty(propertyQuery: InputPropertySearch) {
  const queryBuilder = db.select().from(PROPERTY_TABLE);
  if (propertyQuery.id) {
    queryBuilder.where(PROPERTY_TABLE_COL_NAMES.id, propertyQuery.id);
  }

  if (propertyQuery.city) {
    queryBuilder.andWhere(PROPERTY_TABLE_COL_NAMES.city, propertyQuery.city);
  }

  if (propertyQuery.propertyType) {
    queryBuilder.andWhere(
      PROPERTY_TABLE_COL_NAMES.propertyType,
      propertyQuery.propertyType
    );
  }

  if (propertyQuery.agentId) {
    queryBuilder.andWhere(
      PROPERTY_TABLE_COL_NAMES.agentId,
      propertyQuery.agentId
    );
  }

  if (propertyQuery.price) {
    const query = buildRangeQuery(propertyQuery.price);
    if (query) {
      queryBuilder.andWhere(PROPERTY_TABLE_COL_NAMES.price, ...query);
    }
  }

  return queryBuilder.then(f => f);
}

function buildRangeQuery(
  rangeObject: FloatFilterInput
): [string, number] | null {
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

  return null;
}
