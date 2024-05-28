import { ChargePointDaum } from "./ChargePointDaum";
import { Pagination } from "./Pagination";

export interface ChargePointResponse {
  chargePointData: ChargePointDaum[];
  pagination: Pagination;
}
