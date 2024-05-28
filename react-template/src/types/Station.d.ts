import type { StationStatus } from "constants/Status";

export interface Station {
  title: string;
  address: string;
  conector: string;
  code: string;

  status: StationStatus;

  // Detalhes da recarga
  estimatedChargeTime: string;
  potency: string;
  energy: string;
  dateTime: Date;
}
