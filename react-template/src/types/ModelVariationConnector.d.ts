import { ConnectorType } from "./ConnectorType";

export interface ModelVariationConnector {
  identification: number;
  connectorType: ConnectorType;
  electricitySupply: string;
  format: string;
  maxElectricPower: number;
  maxVoltage: number;
  maxAmperage: number;
}
