import { SettingsCreateFormFieldType } from "components";
import { SettingsStation } from "types/SettingsStation";
/**
 * SettingsStationServices
 * @description: This service is responsible for handling the SettingsStation of the application.
 */
declare const SettingsStationServices: {
    /**
     * Retorna todas as estacões
     * @returns
     */
    getSettingsStations: ({ selectedStation, }: {
        selectedStation: string;
    }) => Promise<SettingsStation[]>;
    /**
     * Dispara um create para criar uma nova estação
     */
    createSettingsStation: (data: SettingsCreateFormFieldType) => Promise<any>;
    /**
     * Dispara um delete para excluir uma estação
     */
    delete: (data: SettingsStation) => Promise<any>;
};
export default SettingsStationServices;
