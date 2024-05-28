export const StationStatuses = {
  AVAILABLE: "Livre",
  UNAVAILABLE: "Indisponível",
  IN_RECHARGE: "Ocupado",
};

export const StatusColors = {
  AVAILABLE: "#00A86B",
  UNAVAILABLE: "#FEE504",
  IN_RECHARGE: "#FEE504",
};

export type StationStatus = keyof typeof StationStatuses;
