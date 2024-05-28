import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RedeEletricaState {
  // TODO: add state
  example: string;
}

export const initialState: RedeEletricaState = {
  example: "May the force be with you",
};

export const redeEletricaSlice = createSlice({
  name: "redeEletrica",
  initialState,
  reducers: {
    setExample: (
      state,
      action: PayloadAction<RedeEletricaState["example"]>
    ) => {
      state.example = action.payload;
    },
  },
});

export const { setExample } = redeEletricaSlice.actions;

export default redeEletricaSlice.reducer;
