import { ENDPOINTS } from "config/endpoints";
import apiServices from "services/ApiServices";
import { ChargeStation } from "types/ChargeStation";
import { ChargeStationResponse } from "types/ChargeStationResponse";
import { State } from "types/State";

/**
 * StationServices
 * @description: This service is responsible for handling the Station of the application.
 */
const StationServices = {
  /**
   * Retorna todas as estacões
   * @returns
   */
  getStations: () =>
    apiServices.find(ENDPOINTS.STATION) as Promise<ChargeStationResponse>,

  /**
   * Converte para a estrutura de opções para o autocomplete
   * @param data
   * @returns
   */
  convertChargeStationToOptions: (data: ChargeStation[]) => {
    return data.map((station) => ({
      label: station.name,
      value: station.identification,
    }));
  },

  /**
   * Converte a lista de States para a estrutura de opções para o autocomplete
   * @returns
   */
  convertStateToOptions: (data: State[]) => {
    return data.map((state) => ({
      label: state.name,
      value: state.code,
    }));
  },

  /**
   * Retorna os estados da UF das estações disponíveis
   */
  getStationsStates: () => {
    return apiServices.find(ENDPOINTS.STATION_STATES) as Promise<State[]>;
  },

  /**
   * Recebe a lista de estacões e um estado de UF e retorna as estacões dessa UF
   */
  getStationsByState: (chargeStations: ChargeStation[], state: string) => {
    if (!state) {
      return chargeStations;
    }

    return chargeStations.filter(
      (station) => station.address.state.code === state
    );
  },
};

export default StationServices;
