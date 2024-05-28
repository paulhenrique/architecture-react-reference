import { Station } from "types/Station";

export const StationMock: Station = {
  title: "Decathon",
  code: "EP0005438",
  address: "Rua Antônio Vieira, n 72 - Campinas /SP",
  conector: "TIPO 1 (SAE J1772)",
  estimatedChargeTime: "1h",
  potency: "10kW",
  energy: "100kWh",
  dateTime: new Date(),
  status: "IN_RECHARGE",
};
