import React, { useRef } from "react";
import web3 from "web3";
import styled from "styled-components";
import tether from "../../assets/img/tether.svg";
import {
  stakeTokenActions,
  selectRwdBalance,
  selectStakingBalance,
  selectTetherBalance,
} from "../../redux/wallet/connectWalletSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

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

  return (
    <>
      <StyledStakingSection>
        <table>
          <thead>
            <tr>
              <th scope="col">
                {web3.utils.fromWei(stakingBalance, "ether")} Staking Balance
              </th>
              <th scope="col">
                {web3.utils.fromWei(rwdBalance, "ether")} RewardBalance
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>USDT</td>
              <td>RWD</td>
            </tr>
          </tbody>
        </table>
        <div>
          <form action="submit" onSubmit={onStakeSubmitHandler}>
            <div>
              <label>Stake Token</label>
              <span>Balance:{web3.utils.fromWei(tetherBalance, "ether")}</span>
            </div>
            <div>
              <input type="text" placeholder="0" required ref={input} />
              <div>
                <img src={tether} alt="tether" />
                USDT
              </div>
            </div>
            <button type="submit">Deposit</button>
          </form>
          <button type="submit">Withdraw</button>
          <div>AirDrop</div>
        </div>
      </StyledStakingSection>
    </>
  );
};

const StyledStakingSection = styled.section`
  color: white;
`;

export default StakingSection;
