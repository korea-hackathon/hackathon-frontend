import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import GlobalStyle from "../style/GlobalStyle";

const Container = styled.div`
  width: 360px;
  height: 800px;
`;

function PresentCondition() {
  return (
    <>
      <GlobalStyle />
      <Container>asd</Container>
    </>
  );
}

export default PresentCondition;
