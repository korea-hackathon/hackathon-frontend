import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RealHeader from "../components/RealHeader";
import LineConnectingDots from "../components/path/Line";

const dotsArray = [
  { x: 90, y: 258 },
  { x: 125, y: 374 },
  { x: 245, y: 441 },
  { x: 378, y: 408 },
  { x: 440, y: 303 },
  { x: 523, y: 208 },
  { x: 652, y: 221 },
  { x: 761, y: 304 },
  { x: 859, y: 392 },
  { x: 984, y: 444 },
  { x: 1117, y: 377 },
  { x: 1211, y: 253 },
  { x: 1363, y: 210 },
  { x: 1487, y: 275 },
  { x: 1560, y: 390 },
  { x: 1691, y: 428 },
  { x: 1821, y: 450 },
];

function PresentCondition() {
  const [PShip, setPShip] = useState({ x: dotsArray[0].x, y: dotsArray[0].y });
  if (matchMedia("screen and (min-width: 1024px)").matches) {
    return (
      <>
        <D_Container>
          <RealHeader />
          <D_Body>
            <D_PathContainer>
              <D_PathText>경로</D_PathText>
              <LineConnectingDots dots={dotsArray} pShipPos={setPShip} />
              <D_PathFlag src="imgs/flag.svg" alt="깃발" />
              <D_PathShip
                src="imgs/ship.png"
                alt="배"
                x={PShip.x}
                y={PShip.y}
              />
            </D_PathContainer>
            <D_DownContainer>
              <D_StpText>출발지 : 서울</D_StpText>
              <D_StpText>목적지 : 제주도</D_StpText>
              <D_StpText>소요시간 : 1시간 30분</D_StpText>
            </D_DownContainer>
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
  height: 100vh;
`;

const D_Container = styled.div`
  width: 1920px;
  height: 1080px;
  background: white;
  position: relative;
`;

const D_DownContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  width: 1606px;
  height: 370px;
  position: absolute;
  left: 157px;
  top: 540px;
  border-radius: 40px;
  background: rgba(179, 219, 255, 0.71);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const D_PathText = styled.span`
  display: inline-block;
  font-family: "Noto Serif KR", serif;
  font-size: 32px;
  margin-left: 138px;
  margin-top: 37px;
  position: absolute;
`;

const D_PathShip = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  transition: left 1s ease-in-out, top 1s ease-in-out; /* Add a transition for smooth movement */
  left: ${(props) => `${props.x - 50}px`};
  top: ${(props) => `${props.y - 50}px`};
`;

const D_PathContainer = styled.div`
  margin-top: 70px;
  width: 1920px;
  height: 500px;
  flex-shrink: 0;
  background: #76beff;
`;

const D_PathFlag = styled.img`
  position: absolute;
  width: 86px;
  height: 132px;
  left: calc(1830px - 30px / 2);
  top: calc(390px - 132px / 2);
`;

const D_StpText = styled.span`
  color: #000;
  font-family: Noto Serif KR;
  font-size: 40px;
  left: 88px;
  position: relative;
`;

const M_Container = styled.div`
  width: 360px;
  height: 800px;
  background: var(
    --background,
    linear-gradient(180deg, #cdf3ff 0%, #86b6ff 100%, #86b6ff 100%)
  );
  position: relative;
`;

const M_Body = styled.div`
  width: 100vw;
  height: 100vh;
`;

const M_PathText = styled.span`
  display: inline-block;
  font-family: "Noto Serif KR", serif;
  font-size: 16px;
  margin-left: 30px;
  margin-top: 70px;
  position: absolute;
`;

const M_EtaText = styled.span`
  display: inline-block;
  font-family: "Noto Serif KR", serif;
  font-size: 16px;
  margin-left: 70px;
  margin-top: 482px;
  position: absolute;
`;
