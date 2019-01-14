export type PropertyType = "CONDO" | "HOUSE" | "APPT";

export type Property = {
  id: string;
  price: number;
  city: string;
  address: string;
  description: string;
  agentId: string;
  agent: Agent;
  propertyType: PropertyType;
};

export type InputPropertySearch = {
  id: string;
  city: string;
  address: string;
  agentId: string;
  price: PriceFloatFilterInput;
  propertyType: PropertyType;
};

export type PriceFloatFilterInput = {
  eq: number;
  le: number;
  lt: number;
  ge: number;
  gt: number;
};

export type Agent = {
  id: string;
  email: string;
  address: string;
  properties?: Property[];
};
