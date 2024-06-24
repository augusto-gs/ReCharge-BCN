import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { motorbikesReducer } from "./features/motorbikes/motorbikeSlice";

export const store = configureStore({
  reducer: { motorbikesLocationState: motorbikesReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
