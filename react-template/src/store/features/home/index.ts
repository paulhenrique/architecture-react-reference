import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChargeStation } from "types/ChargeStation";

export interface HomeState {
  selectedStation: ChargeStation | null;
  selectedState: string;
}

export const initialState: HomeState = {
  selectedStation: null,
  selectedState: "",
};

export const HomeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setSelectedStation: (
      state,
      action: PayloadAction<HomeState["selectedStation"]>
    ) => {
      state.selectedStation = action.payload;
    },
    setSelectedState: (
      state,
      action: PayloadAction<HomeState["selectedState"]>
    ) => {
      state.selectedState = action.payload;
    },
  },
});

export const { setSelectedState, setSelectedStation } = HomeSlice.actions;

export default HomeSlice.reducer;
