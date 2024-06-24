import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ChargingLocationStructure from "../../../types";

export interface MotorbikeStateStructure {
  motorbikes: ChargingLocationStructure[];
}

const initialMotorbikesState = {} as MotorbikeStateStructure;

const motorbikeSlice = createSlice({
  name: "motorbikes",
  initialState: initialMotorbikesState,
  reducers: {
    loadMotorbikes: (
      currentState: MotorbikeStateStructure,
      action: PayloadAction<ChargingLocationStructure[]>,
    ) => ({ ...currentState, motorbikes: action.payload }),
  },
});

export const {
  actions: { loadMotorbikes: loadMotorbikesActionCreator },
  reducer: motorbikesReducer,
} = motorbikeSlice;
