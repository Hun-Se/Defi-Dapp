import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { asyncConnectWallet, selectAccount } from "./connectSlice";

function ConnectWallet() {
  const account = useAppSelector(selectAccount);
  const dispatch = useAppDispatch();

  const connectSubmitEvent = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (window.ethereum !== undefined) {
      dispatch(asyncConnectWallet());
    } else {
      alert("메타마스크 설치를 확인 해주세요");
    }
  };

  return (
    <>
      <form onSubmit={connectSubmitEvent}>
        <button type="submit">연결</button>
        <div>{account}</div>
      </form>
    </>
  );
}

export default ConnectWallet;
