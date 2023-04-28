import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import connectWalletReducer from "../redux/wallet/connectWalletSlice";

export const store = configureStore({
  reducer: {
    connect: connectWalletReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
