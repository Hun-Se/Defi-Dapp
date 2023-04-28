import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  asyncConnectWallet,
  selectAccount,
  selectConnectStatus,
} from "../../redux/wallet/connectWalletSlice";
import StyledButton from "../Button/Button";
import styled from "styled-components";

function Header() {
  const dispatch = useAppDispatch();
  const account = useAppSelector(selectAccount);
  const status = useAppSelector(selectConnectStatus);

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
      <StyledHeader>
        <form onSubmit={connectSubmitEvent}>
          {status === "loading" && <div>Loading...</div>}
          {account[0] === undefined ? (
            <StyledButton connect={"connect"}>Connect Wallet</StyledButton>
          ) : (
            <StyledButton connect={"connect"}>{account}</StyledButton>
          )}
        </form>
      </StyledHeader>
    </>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: right;
  margin: 10px;
`;

export default Header;
