import { useQuery } from "@tanstack/react-query";
import StationServices from "services/StationsService";

/**
 * Função que busca as estacões no servidor.
 * @returns
 */
export const useStation = () => {
  return useQuery({
    queryKey: ["stations"],
    queryFn: () => {
      return StationServices.getStations();
    },
  });
};
