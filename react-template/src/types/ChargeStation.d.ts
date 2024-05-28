import { Address } from "./ChargePointDaum";
import { AdditionalInformation } from "./AdditionalInformation";
import { Owner } from "./Owner";

export interface ChargeStation {
  identification: string;
  name: string;
  address: Address;
  owner: Owner | null;
  additionalInformations: null | AdditionalInformation[];
  locationPoints: any;
  photos: null | any[];
  latitude: number;
  longitude: number;
  lastUpdateDate: string;
}
