import React, { useEffect } from "react";
import styled from "styled-components";
import { css } from "styled-components";
import GlobalStyle from "../style/GlobalStyle";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import RealHeader from "../components/RealHeader";

function PresentCondition() {
  return (
    <>
      <LContainer>
        <RealHeader />
      </LContainer>
    </>
  );
}

export default PresentCondition;

const LContainer = styled.div`
  width: 1920px;
  height: 1080px;
  background: var(
    --background,
    linear-gradient(180deg, #cdf3ff 0%, #86b6ff 100%, #86b6ff 100%)
  );
`;
