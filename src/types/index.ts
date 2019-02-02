export type PropertyType = "CONDO" | "HOUSE" | "APPT";

// region GLOBAL
export type FloatFilterInput = {
  eq: number;
  le: number;
  lt: number;
  ge: number;
  gt: number;
};
// endregion

// region PROPERTY
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
  price: FloatFilterInput;
  propertyType: PropertyType;
};
// endregion

// region AGENT
export enum AgentDBFields {
  id = "id",
  email = "email",
  address = "address"
}

export type Agent = {
  [AgentDBFields.id]: string;
  [AgentDBFields.email]: string;
  [AgentDBFields.address]: string;
  properties?: Property[];
};

export type InputAgentSearch = Pick<
  Agent,
  AgentDBFields.id | AgentDBFields.email | AgentDBFields.address
>;
// endregion