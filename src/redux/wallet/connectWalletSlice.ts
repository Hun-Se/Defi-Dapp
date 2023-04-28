import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import Web3 from "web3";

export interface connectWalletState {
  account: string;
  status: "idle" | "loading" | "failed";
}

const initialState: connectWalletState = {
  account: "",
  status: "idle",
};

export const asyncConnectWallet = createAsyncThunk(
  "connect/asyncConnectWallet",
  async () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const account = await web3.eth.requestAccounts();
    return account[0];
  }
);

export const ConnectWalletSlice = createSlice({
  name: "connect",
  initialState,
  reducers: {
    accountReducer: (state, action) => {
      state.account = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncConnectWallet.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(asyncConnectWallet.fulfilled, (state, action) => {
      state.status = "idle";
      state.account = action.payload;
    });
    builder.addCase(asyncConnectWallet.rejected, (state, action) => {
      state.status = "failed";
    });
  },
});

export const selectAccount = (state: RootState) => state.connect.account;
export const selectConnectStatus = (state: RootState) => state.connect.status;

export const ConnectWalletActions = ConnectWalletSlice.actions;
export default ConnectWalletSlice.reducer;
