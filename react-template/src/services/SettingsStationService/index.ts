import { SettingsCreateFormFieldType } from "components";
import { ENDPOINTS } from "config/endpoints";
import apiServices from "services/ApiServices";
import { SettingsStation } from "types/SettingsStation";

/**
 * SettingsStationServices
 * @description: This service is responsible for handling the SettingsStation of the application.
 */
const SettingsStationServices = {
  /**
   * Retorna todas as estacões
   * @returns
   */
  getSettingsStations: async ({
    selectedStation,
  }: {
    selectedStation: string;
  }) => {
    const data = (await apiServices.find(
      ENDPOINTS.SETTINGS_STATION + "?selectedStation=" + selectedStation
    )) as Promise<SettingsStation[]>;

    return data;
  },

  /**
   * Dispara um create para criar uma nova estação
   */
  createSettingsStation: async (data: SettingsCreateFormFieldType) => {
    return apiServices.create(ENDPOINTS.SETTINGS_STATION, data);
  },

  /**
   * Dispara um delete para excluir uma estação
   */
  delete: async (data: SettingsStation) => {
    return apiServices.delete(ENDPOINTS.SETTINGS_STATION, data);
  },
};

export default SettingsStationServices;
