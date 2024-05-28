import { PayloadAction } from "@reduxjs/toolkit";
import { ChargeStation } from "types/ChargeStation";
export interface HomeState {
    selectedStation: ChargeStation | null;
    selectedState: string;
}
export declare const initialState: HomeState;
export declare const HomeSlice: import("@reduxjs/toolkit").Slice<HomeState, {
    setSelectedStation: (state: import("immer").WritableDraft<HomeState>, action: PayloadAction<HomeState["selectedStation"]>) => void;
    setSelectedState: (state: import("immer").WritableDraft<HomeState>, action: PayloadAction<HomeState["selectedState"]>) => void;
}, "home", "home", import("@reduxjs/toolkit").SliceSelectors<HomeState>>;
export declare const setSelectedState: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "home/setSelectedState">, setSelectedStation: import("@reduxjs/toolkit").ActionCreatorWithPayload<ChargeStation | null, "home/setSelectedStation">;
declare const _default: import("redux").Reducer<HomeState>;
export default _default;
