export type Property = {
  id: string;
  price: number;
  city: string;
  address: string;
  description: string;
  agentId: string;
  agent: Agent;
};

export type Agent = {
  id: string;
  email: string;
  address: string;
  properties?: Property[];
};
