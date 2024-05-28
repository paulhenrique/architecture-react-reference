import { Error } from "./Error";
import { ErrorBeforeHeartbeat } from "./ErrorBeforeHeartbeat";
import { StatusBeforeHeartbeat } from "./StatusBeforeHeartbeat";

export interface Status2 {
  code: string;
  name: string;
  situation: string;
  description: string;
}

export interface Status {
  heartbeat: boolean;
  statusBeforeHeartbeat: StatusBeforeHeartbeat;
  errorBeforeHeartbeat: ErrorBeforeHeartbeat;
  connectorIdentification: number;
  status: Status2;
  error: Error;
  errorDescription: string;
  updateDatetime: string;
}
