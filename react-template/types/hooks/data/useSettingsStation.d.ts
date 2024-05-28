import { SettingsCreateFormFieldType } from "components";
import { SettingsStation } from "types/SettingsStation";
/**
 * Função que busca as estacões configuradas no servidor.
 * @returns
 */
export declare const useSettingsStation: (selectedStation: string) => import("@tanstack/react-query").UseQueryResult<SettingsStation[], Error>;
export declare const useSettingsStationMutationCreate: () => import("@tanstack/react-query").UseMutationResult<any, Error, SettingsCreateFormFieldType, unknown>;
export declare const useSettingsStationMutationDelete: () => import("@tanstack/react-query").UseMutationResult<void, Error, SettingsStation, unknown>;
