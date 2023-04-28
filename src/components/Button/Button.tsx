import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button<{ connect: string }>`
  width: 175px;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  background: linear-gradient(108.49deg, #af53ff 0%, #6eacfe 95.17%);
  border: 1px solid #000000;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  &:active {
    background: linear-gradient(
      108.49deg,
      rgba(130, 0, 243, 0.5) 0%,
      rgba(128, 20, 245, 0.5) 0.01%,
      rgba(112, 159, 253, 0.5) 95.16%,
      rgba(111, 162, 253, 0.5) 95.17%
    );
  }
  ${(props) =>
    props.connect &&
    css`
      padding: 14px;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    `}
`;

export default StyledButton;
