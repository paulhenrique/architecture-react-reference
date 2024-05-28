import { StationStatus } from "constants/Status";
import { ChargePointDaum } from "types/ChargePointDaum";
import { ChargePointResponse } from "types/ChargePointResponse";
import { ChargeStation } from "types/ChargeStation";
import { Station } from "types/Station";
/**
 * ChargePointServices
 * @description: This service is responsible for handling the Station of the application.
 */
declare const ChargePointServices: {
    /**
     * Retorna todas as estacões
     * @returns
     */
    getChargePointsByChargeStation: (data: {
        chargeStationIdentification: string;
    }) => Promise<ChargePointResponse>;
    /**
     * Retorna o status da estação com base nos status da ChargeStation
     */
    getStateFromChargePoint: (data: ChargePointDaum) => StationStatus;
    /**
     * Retorna o status da estação com base nos status da ChargeStation
     **/
    convertChargePointAndStationToStationData: (chargePoint: ChargePointDaum, station: ChargeStation) => Station;
    getAddress: (selectedChargeStation: ChargeStation) => string;
};
export default ChargePointServices;
