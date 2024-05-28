/**
 * StatusServices
 * @description: This service is responsible for handling the status of the application.
 */
const StatusServices = {
  isStatusAvailable: (status: string) => {
    return status === "AVAILABLE";
  },
  isStatusInCharge: (status: string) => {
    return status === "IN_RECHARGE";
  },
  isStatusUnavailable: (status: string) => {
    return status === "UNAVAILABLE";
  },
};

export default StatusServices;
