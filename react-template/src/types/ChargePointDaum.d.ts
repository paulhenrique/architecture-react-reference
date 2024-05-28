import { ChargeStation } from "./ChargeStation";
import { Connector } from "./Connector";
import { ModelVariation } from "./ModelVariation";
import { Status } from "./Status";

export interface ChargePointDaum {
  identification: string;
  deviceIdentification: string;
  externalIdentification: string;
  chargePointSerialNumber: string;
  chargeBoxSerialNumber?: string;
  chargePointVendor: string;
  chargePointModel: string;
  firmwareVersion: string;
  ocppProtocolVersion: any;
  iccid: string;
  imsi: string;
  meterSerialNumber: string;
  meterType: string;
  latitude: number;
  longitude: number;
  chargeStation: ChargeStation;
  owner: any;
  connectors: Connector[];
  status: Status[];
  modelVariation: ModelVariation;
  situation: string;
  heartbeatInterval: number;
  tariffRatingEventIdentification: any;
  lastUpdateDate: string;
}
