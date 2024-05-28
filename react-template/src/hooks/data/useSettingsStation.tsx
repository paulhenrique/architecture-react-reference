import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { SettingsCreateFormFieldType } from "components";
import SettingsStationServices from "services/SettingsStationService";
import { SettingsStation } from "types/SettingsStation";

/**
 * Função que busca as estacões configuradas no servidor.
 * @returns
 */
export const useSettingsStation = (selectedStation: string) => {
  return useQuery({
    queryKey: ["settingsStations", selectedStation],
    queryFn: () => {
      return SettingsStationServices.getSettingsStations({
        selectedStation,
      });
    },
  });
};

export const useSettingsStationMutationCreate = () => {
  return useMutation({
    mutationKey: ["settingsStations"],
    mutationFn: (data: SettingsCreateFormFieldType) => {
      return SettingsStationServices.createSettingsStation(data);
    },
  });
};

export const useSettingsStationMutationDelete = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["settingsStations"],
    mutationFn: async (data: SettingsStation) => {
      await SettingsStationServices.delete(data);
      queryClient.refetchQueries({
        queryKey: ["settingsStations"],
      });
    },
  });
};
