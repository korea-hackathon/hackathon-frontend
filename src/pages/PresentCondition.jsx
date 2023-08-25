import React, { useEffect } from "react";
import styled from "styled-components";
import { css } from "styled-components";
import GlobalStyle from "../style/GlobalStyle";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import RealHeader from "../components/RealHeader";

function PresentCondition() {
  if (matchMedia("screen and (min-width: 1024px)").matches) {
    return (
      <>
        <D_Container>
          <RealHeader />
          <D_Body>
            <D_PathText>경로</D_PathText>
            <D_EtaText>도착 예상 시간</D_EtaText>
          </D_Body>
        </D_Container>
      </>
    );
  } else {
    return (
      <>
        <M_Container>
          <RealHeader />
          <M_Body>
            <M_PathText>경로</M_PathText>
            <M_EtaText>도착 예상 시간</M_EtaText>
          </M_Body>
        </M_Container>
      </>
    );
  }
}

export default PresentCondition;

const D_Body = styled.div`
  width: 100vw;
  height: calc(1080px - 64px);
`;

const D_Container = styled.div`
  width: 1920px;
  height: 1080px;
  background: var(
    --background,
    linear-gradient(180deg, #cdf3ff 0%, #86b6ff 100%, #86b6ff 100%)
  );
`;

const D_PathText = styled.span`
  display: inline-block;
  font-family: "Noto Serif KR", serif;
  font-size: 32px;
  margin-left: 108px;
  margin-top: 232px;
`;

const D_EtaText = styled.span`
  display: inline-block;
  font-family: "Noto Serif KR", serif;
  font-size: 32px;
  margin-left: 1189px;
  margin-top: 232px;
`;

const D_EtaContainer = styled.div``;

const M_Container = styled.div`
  width: 360px;
  height: 800px;
  background: var(
    --background,
    linear-gradient(180deg, #cdf3ff 0%, #86b6ff 100%, #86b6ff 100%)
  );
`;

const M_Body = styled.div`
  width: 100vw;
  height: 100vh;
`;

const M_PathText = styled.span`
  font-family: Noto Serif KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const M_EtaText = styled.span`
  font-family: Noto Serif KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
