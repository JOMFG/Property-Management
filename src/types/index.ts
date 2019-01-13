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

export type Agent = {
  id: string;
  email: string;
  address: string;
  properties?: Property[];
};
