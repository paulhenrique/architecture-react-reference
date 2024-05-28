import { useQuery } from "@tanstack/react-query";
import StationServices from "services/StationsService";

/**
 * Função que busca os estados (ufs) das estacões no servidor.
 * @returns
 */
export const useStationStates = () => {
  return useQuery({
    queryKey: ["stations", "states"],
    queryFn: () => {
      return StationServices.getStationsStates();
    },
  });
};
