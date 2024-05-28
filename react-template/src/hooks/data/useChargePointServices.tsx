import { useQuery } from "@tanstack/react-query";
import ChargePointServices from "services/ChargePointService";

interface useChargePointProps {
  chargeStationIdentification: string;
}

/**
 * Função que busca as estacões no servidor.
 * @returns
 */
export const useChargePoint = ({
  chargeStationIdentification,
}: useChargePointProps) => {
  return useQuery({
    queryKey: ["chargePoints", chargeStationIdentification],
    queryFn: () => {
      return ChargePointServices.getChargePointsByChargeStation({
        chargeStationIdentification,
      });
    },
  });
};
