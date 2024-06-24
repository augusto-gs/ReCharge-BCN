import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ChargingLocationStructure from "../../../types";

export interface MotorbikeStateStructure {
  locations: ChargingLocationStructure[];
}

const initialMotorbikesLocationState: MotorbikeStateStructure = {
  locations: [],
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
  },
});

export const {
  actions: { loadMotorbikesLocations: loadMotorbikesActionCreator },
  reducer: motorbikesReducer,
} = motorbikeSlice;
