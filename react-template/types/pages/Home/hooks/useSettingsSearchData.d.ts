import { ChargeStation } from "types/ChargeStation";
export declare const useSettingsSearchData: () => {
    isLoading: boolean;
    data: import("../../../types/ChargeStationResponse").ChargeStationResponse | undefined;
    stationStates: import("../../../types/State").State[] | undefined;
    selectedState: string;
    handleChangeChargeStation: (value: string) => void;
    handleChangeState: (value: string) => void;
    selectedStation: ChargeStation | null;
};
