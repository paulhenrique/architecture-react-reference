import { ChargeStation } from "./ChargeStation";
import { Pagination } from "./Pagination";

export interface ChargeStationResponse {
  chargeStationData: ChargeStation[];
  pagination: Pagination;
}
