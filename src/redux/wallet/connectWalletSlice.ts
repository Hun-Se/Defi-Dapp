import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import Web3 from "web3";
import Tether from "../../truffle_abis/Tether.json";
import RWD from "../../truffle_abis/RWD.json";
import DecentralBank from "../../truffle_abis/DecentralBank.json";
import { Contract } from "web3-eth-contract";

export interface connectWalletState {
  account: string;
  tether: object;
  rwd: object;
  decentralBank: object;
  decentralBankAddress: string;
  tetherBalance: string;
  rwdBalance: string;
  stakingBalance: string;
  status: "idle" | "loading" | "failed";
}

type Networks = {
  [networkId: number]: {
    address: string;
  };
};

const initialState: connectWalletState = {
  account: "",
  tether: {},
  rwd: {},
  decentralBank: {},
  decentralBankAddress: "",
  tetherBalance: "0",
  rwdBalance: "0",
  stakingBalance: "0",
  status: "idle",
};

export const asyncConnectWallet = createAsyncThunk(
  "connect/asyncConnectWallet",
  async () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const account = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();

    // 테더 contract 불러오기
    const tetherData = (Tether.networks as Networks)[networkId];
    const tether = new web3.eth.Contract(Tether.abi as any, tetherData.address);
    const tetherBalance = await tether.methods.balanceOf(account[0]).call();

    // 보상토큰(RWD) contract 불러오기
    const rwdData = (RWD.networks as Networks)[networkId];
    const rwd = new web3.eth.Contract(RWD.abi as any, rwdData.address);
    const rwdBalance = await rwd.methods.balanceOf(account[0]).call();

    // DecentralBank contract 불러오기
    const decentralBankData = (DecentralBank.networks as Networks)[networkId];
    const decentralBank = new web3.eth.Contract(
      DecentralBank.abi as any,
      decentralBankData.address
    );
    const stakingBalance = await decentralBank.methods
      .stakingBalance(account[0])
      .call();

    return {
      account: account[0],
      tether: tether,
      rwd: rwd,
      decentralBank: decentralBank,
      decentralBankAddress: decentralBankData.address,
      tetherBalance: tetherBalance.toString(),
      rwdBalance: rwdBalance.toString(),
      stakingBalance: stakingBalance.toString(),
    };
  }
);

export const ConnectWalletSlice = createSlice({
  name: "connect",
  initialState,
  reducers: {
    stakeTokens: (state, action) => {
      (state.tether as Contract).methods
        .approve(state.decentralBankAddress, action.payload)
        .send({ from: state.account });
      (state.decentralBank as Contract).methods
        .depositTokens(action.payload)
        .send({ from: state.account });
    },
    unstakeTokens: (state) => {
      (state.decentralBank as Contract).methods
        .unstakeTokens()
        .send({ from: state.account });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncConnectWallet.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(asyncConnectWallet.fulfilled, (state, action) => {
      state.status = "idle";
      state.account = action.payload.account;
      if (action.payload.tether !== undefined) {
        state.tether = action.payload.tether;
        state.tetherBalance = action.payload.tetherBalance;
      }
      state.stakingBalance = action.payload.stakingBalance;
      state.decentralBank = action.payload.decentralBank;
      state.decentralBankAddress = action.payload.decentralBankAddress;
    });
    builder.addCase(asyncConnectWallet.rejected, (state, action) => {
      state.status = "failed";
      window.alert("지갑연결에 실패했습니다.");
    });
  },
});

export const selectAccount = (state: RootState) => state.connect.account;
export const selectTetherBalance = (state: RootState) =>
  state.connect.tetherBalance;
export const selectStakingBalance = (state: RootState) =>
  state.connect.stakingBalance;
export const selectRwdBalance = (state: RootState) => state.connect.rwdBalance;

export const selectConnectStatus = (state: RootState) => state.connect.status;

export const stakeTokenActions = ConnectWalletSlice.actions.stakeTokens;
export const unstakeTokenActions = ConnectWalletSlice.actions.unstakeTokens;
export default ConnectWalletSlice.reducer;
