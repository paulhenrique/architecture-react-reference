import { Country } from "./Country";
import { State } from "./State";

export interface Address {
  street: string;
  number: number;
  complement: string;
  superDivision: string;
  city: string;
  zipCode: string;
  state: State;
  country: Country;
}
