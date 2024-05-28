import { PayloadAction } from "@reduxjs/toolkit";
export interface RedeEletricaState {
    example: string;
}
export declare const initialState: RedeEletricaState;
export declare const redeEletricaSlice: import("@reduxjs/toolkit").Slice<RedeEletricaState, {
    setExample: (state: import("immer").WritableDraft<RedeEletricaState>, action: PayloadAction<RedeEletricaState["example"]>) => void;
}, "redeEletrica", "redeEletrica", import("@reduxjs/toolkit").SliceSelectors<RedeEletricaState>>;
export declare const setExample: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "redeEletrica/setExample">;
declare const _default: import("redux").Reducer<RedeEletricaState>;
export default _default;
