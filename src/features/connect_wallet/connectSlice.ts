import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import Web3 from "web3";

export interface connectWalletState {
  account: string;
  status: string;
}

const initialState: connectWalletState = {
  account: "",
  status: "",
};

export const asyncConnectWallet = createAsyncThunk(
  "web3slice/asyncConnectWallet",
  async () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const account = await web3.eth.requestAccounts();
    return account[0];
  }
);

export const ConnectWalletSlice = createSlice({
  name: "connect",
  initialState: initialState,
  reducers: {
    accountReducer: (state, action) => {
      state.account = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncConnectWallet.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(asyncConnectWallet.fulfilled, (state, action) => {
      state.status = "Connected";
      state.account = action.payload;
    });
    builder.addCase(asyncConnectWallet.rejected, (state, action) => {
      state.status = "Failed";
    });
  },
});

export const selectAccount = (state: RootState) => state.connect.account;

export const ConnectWalletActions = ConnectWalletSlice.actions;
export default ConnectWalletSlice.reducer;
