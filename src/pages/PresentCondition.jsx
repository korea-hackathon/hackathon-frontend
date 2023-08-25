import React, { useEffect } from "react";
import styled from "styled-components";
import { css } from "styled-components";
import GlobalStyle from "../style/GlobalStyle";
import Header from "../components/Header";

const PContainer = styled.div`
  width: 360px;
  height: 800px;
`;

const LContainer = styled.div`
  width: 800px;
  height: 360px;
`;

function PresentCondition() {
  // 초기 상태 설정
  const [isPortrait, setIsPortrait] = React.useState(
    window.matchMedia("(orientation: portrait)").matches
  );

  // orientation 변경 감지 시 처리
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(orientation: portrait)");

    const handleOrientationChange = (event) => {
      setIsPortrait(event.matches);
    };

    mediaQuery.addEventListener("change", handleOrientationChange);

    return () => {
      mediaQuery.removeEventListener("change", handleOrientationChange);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      {isPortrait ? (
        <PContainer>
          <Header page="precondition" mode="port" />
        </PContainer>
      ) : (
        <LContainer>
          <Header page="precondition" mode="land" />
        </LContainer>
      )}
    </>
  );
}

export default PresentCondition;
