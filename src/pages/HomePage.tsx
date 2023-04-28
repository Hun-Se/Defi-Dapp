import React from "react";
import Header from "../components/Header/Header";
import styled from "styled-components";

function HomePage() {
  return (
    <>
      <StyledWrapContainer>
        <Header />
      </StyledWrapContainer>
    </>
  );
}

export default HomePage;

const StyledWrapContainer = styled.div`
  height: 100vh;
  background: #181a25;
  border: 20px solid #292a34;
  border-radius: 25px;
`;
