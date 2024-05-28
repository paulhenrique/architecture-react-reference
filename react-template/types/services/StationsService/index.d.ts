import { ChargeStation } from "types/ChargeStation";
import { ChargeStationResponse } from "types/ChargeStationResponse";
import { State } from "types/State";
/**
 * StationServices
 * @description: This service is responsible for handling the Station of the application.
 */
declare const StationServices: {
    /**
     * Retorna todas as estacões
     * @returns
     */
    getStations: () => Promise<ChargeStationResponse>;
    /**
     * Converte para a estrutura de opções para o autocomplete
     * @param data
     * @returns
     */
    convertChargeStationToOptions: (data: ChargeStation[]) => {
        label: string;
        value: string;
    }[];
    /**
     * Converte a lista de States para a estrutura de opções para o autocomplete
     * @returns
     */
    convertStateToOptions: (data: State[]) => {
        label: string;
        value: string;
    }[];
    /**
     * Retorna os estados da UF das estações disponíveis
     */
    getStationsStates: () => Promise<State[]>;
    /**
     * Recebe a lista de estacões e um estado de UF e retorna as estacões dessa UF
     */
    getStationsByState: (chargeStations: ChargeStation[], state: string) => ChargeStation[];
};
export default StationServices;
