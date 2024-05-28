import { Group } from "./Group";

export interface Owner {
  documentNumber: string;
  identification: string;
  name: string;
  contactName: string;
  phone: any;
  email: string;
  group: Group;
}
