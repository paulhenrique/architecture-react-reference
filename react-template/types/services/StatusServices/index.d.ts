/**
 * StatusServices
 * @description: This service is responsible for handling the status of the application.
 */
declare const StatusServices: {
    isStatusAvailable: (status: string) => boolean;
    isStatusInCharge: (status: string) => boolean;
    isStatusUnavailable: (status: string) => boolean;
};
export default StatusServices;
