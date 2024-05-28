import { ENDPOINTS } from "config/endpoints";
import { StationStatus } from "constants/Status";
import apiServices from "services/ApiServices";
import UtilServices from "services/UtilServices";
import { ChargePointDaum } from "types/ChargePointDaum";
import { ChargePointResponse } from "types/ChargePointResponse";
import { ChargeStation } from "types/ChargeStation";
import { Station } from "types/Station";

/**
 * ChargePointServices
 * @description: This service is responsible for handling the Station of the application.
 */
const ChargePointServices = {
  /**
   * Retorna todas as estacões
   * @returns
   */
  getChargePointsByChargeStation: (data: {
    chargeStationIdentification: string;
  }) =>
    apiServices.create(ENDPOINTS.CHARGE_POINTS, {
      chargeStationId: data.chargeStationIdentification,
    }) as Promise<ChargePointResponse>,

  /**
   * Retorna o status da estação com base nos status da ChargeStation
   */
  getStateFromChargePoint: (data: ChargePointDaum): StationStatus => {
    const { status } = data;

    // O conector se refere ao item que tem identificador igual a 0 no status da estação
    const conector = status.find((item) => item.connectorIdentification === 0);

    switch (conector?.status.code) {
      case "Available":
        return "AVAILABLE";
      case "Occupied":
        return "UNAVAILABLE";
      default:
        return "IN_RECHARGE";
    }
  },

  /**
   * Retorna o status da estação com base nos status da ChargeStation
   **/
  convertChargePointAndStationToStationData: (
    chargePoint: ChargePointDaum,
    station: ChargeStation
  ): Station => {
    if (UtilServices.isAnyEmpty(chargePoint, station)) return {} as Station;

    return {
      title: station.name,
      address: ChargePointServices.getAddress(station),
      conector: chargePoint?.connectors?.[0]?.identification?.toString(),
      code: station.identification,
      status: ChargePointServices.getStateFromChargePoint(chargePoint),
      estimatedChargeTime: "",
      potency: "",
      energy: "",
      dateTime: new Date(),
    };
  },

  getAddress: (selectedChargeStation: ChargeStation) => {
    return `${selectedChargeStation.address.street} - ${selectedChargeStation.address.city} - ${selectedChargeStation.address.state.code}`;
  },
};

export default ChargePointServices;
