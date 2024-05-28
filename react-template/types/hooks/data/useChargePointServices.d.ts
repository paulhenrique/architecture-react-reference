interface useChargePointProps {
    chargeStationIdentification: string;
}
/**
 * Função que busca as estacões no servidor.
 * @returns
 */
export declare const useChargePoint: ({ chargeStationIdentification, }: useChargePointProps) => import("@tanstack/react-query").UseQueryResult<import("../../types/ChargePointResponse").ChargePointResponse, Error>;
export {};
