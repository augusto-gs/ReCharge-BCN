import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ChargingLocationStructure from "../../../types";

export interface MotorbikeStateStructure {
  locations: ChargingLocationStructure[];
  location: ChargingLocationStructure;
}

const initialMotorbikesLocationState: MotorbikeStateStructure = {
  locations: [],
  location: {} as ChargingLocationStructure,
};

const motorbikeSlice = createSlice({
  name: "motorbikes",
  initialState: initialMotorbikesLocationState,
  reducers: {
    loadMotorbikesLocations: (
      currentState: MotorbikeStateStructure,
      action: PayloadAction<ChargingLocationStructure[]>,
    ): MotorbikeStateStructure => ({
      ...currentState,
      locations: action.payload,
    }),

    loadSelectedMotorbikeLocation: (
      currentState: MotorbikeStateStructure,
      action: PayloadAction<ChargingLocationStructure>,
    ) => ({ ...currentState, location: action.payload }),
  },
});

export const {
  actions: {
    loadMotorbikesLocations: loadMotorbikesActionCreator,
    loadSelectedMotorbikeLocation: loadSelectedMotorbikeActionCreator,
  },
  reducer: motorbikesLocationReducer,
} = motorbikeSlice;
