import React, { useRef } from "react";
import web3 from "web3";
import styled from "styled-components";
import tether from "../../assets/img/tether.svg";
import {
  stakeTokenActions,
  selectRwdBalance,
  selectStakingBalance,
  selectTetherBalance,
  unstakeTokenActions,
} from "../../redux/wallet/connectWalletSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import StyledButton from "../Button/Button";
import Airdrop from "./Airdrop";

const StakingSection = () => {
  const dispatch = useAppDispatch();
  const tetherBalance = useAppSelector(selectTetherBalance);
  const stakingBalance = useAppSelector(selectStakingBalance);
  const rwdBalance = useAppSelector(selectRwdBalance);
  const input = useRef<HTMLInputElement>(null);

  const onStakeSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input.current) {
      const amount = web3.utils.toWei(input.current.value, "ether");
      dispatch(stakeTokenActions(amount));
    }
  };

  const onUnStakeClickHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(unstakeTokenActions());
  };

  return (
    <>
      <StyledStakingSection>
        <StyledBoard>
          <StyledCard>
            Staking Balance: {web3.utils.fromWei(stakingBalance, "ether")} USDT
          </StyledCard>
          <StyledCard>
            Reward Balance: {web3.utils.fromWei(rwdBalance, "ether")} RWD
          </StyledCard>
        </StyledBoard>
        <div>
          <form action="submit" onSubmit={onStakeSubmitHandler}>
            <StyledLaberlContainer>
              <img src={tether} alt="tether" />
              <StyledLabel>Stake USDT</StyledLabel>
            </StyledLaberlContainer>
            <div>
              <StyledInput type="text" placeholder="0" required ref={input} />
              <StyledBalnce>
                Balance:{web3.utils.fromWei(tetherBalance, "ether")} USDT
              </StyledBalnce>
            </div>
            <StyledButtonContainer>
              <StyledButton connect={"connect"} type="submit">
                Deposit
              </StyledButton>
              <StyledButton
                connect={"connect"}
                type="submit"
                onClick={onUnStakeClickHandler}
              >
                Withdraw
              </StyledButton>
            </StyledButtonContainer>
          </form>
        </div>
        <Airdrop />
      </StyledStakingSection>
    </>
  );
};

const StyledStakingSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const StyledBoard = styled.div`
  margin-bottom: 100px;
`;

const StyledCard = styled.span`
  font-size: 30px;
  padding: 20px;
  margin: 10px;
  background: #171822;
  border: 1px solid #303241;
  border-radius: 12px;
`;

const StyledInput = styled.input`
  width: 404px;
  padding: 10px;
  background: linear-gradient(180deg, #171822 0%, #171822 100%);
  border: 1px solid #303241;
  border-radius: 12px;
  color: white;
  font-size: 20px;
  line-height: 30px;
`;

const StyledLaberlContainer = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 9px;
  margin-left: 5px;
`;

const StyledBalnce = styled.div`
  margin: 20px 0;
  font-size: 20px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default StakingSection;
