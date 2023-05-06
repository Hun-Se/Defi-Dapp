import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectStakingBalance,
  issueTokensActions,
} from "../../redux/wallet/connectWalletSlice";
import styled from "styled-components";

const Airdrop = () => {
  const [time, setTime] = useState(30);
  const dispatch = useAppDispatch();
  const stakingBalance = useAppSelector(selectStakingBalance);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    if (time === 0) {
      if (stakingBalance >= "20000000000000000000") {
        dispatch(issueTokensActions(stakingBalance));
      }
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [time]);

  return (
    <>
      <StyledAirdrop>{time}</StyledAirdrop>
    </>
  );
};

const StyledAirdrop = styled.div``;

export default Airdrop;
