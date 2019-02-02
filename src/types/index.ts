export type PropertyType = "CONDO" | "HOUSE" | "APPT";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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

export type InputPropertySearch = Partial<Omit<Property, "agent">>;
// endregion

// region AGENT
export enum AgentDBFields {
  id = "id",
  email = "email",
  address = "address"
}

export type Agent = {
  id: string;
  email: string;
  address: string;
  properties?: Property[];
};

export type InputAgentSearch = Partial<Omit<Agent, "properties">>;
// endregion
