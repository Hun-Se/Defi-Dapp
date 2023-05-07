import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectStakingBalance,
  issueTokensActions,
} from "../../redux/wallet/connectWalletSlice";
import styled from "styled-components";
import { asyncConnectWallet } from "../../redux/wallet/connectWalletSlice";

const Airdrop = () => {
  const [time, setTime] = useState(10);
  const dispatch = useAppDispatch();
  const stakingBalance = useAppSelector(selectStakingBalance);

  useEffect(() => {
    // dispatch(asyncConnectWallet);
    if (stakingBalance >= "20000000000000000000") {
      const timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
      if (time === 0) {
        dispatch(issueTokensActions());
        clearInterval(timer);
      }
      return () => clearInterval(timer);
    }
  }, [time, stakingBalance]);

  return (
    <>
      <StyledAirdrop>
        <span>TIMER</span>: {time}
      </StyledAirdrop>
    </>
  );
};

const StyledAirdrop = styled.div``;

export default Airdrop;
