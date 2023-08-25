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
              <D_PathShip
                src="imgs/ship.png"
                alt="배"
                x={PShip.x}
                y={PShip.y}
              />
            </D_PathContainer>
            <D_DownContainer>
              <D_SttContainer>
                <D_SltText>출항 시간</D_SltText>
                <D_SldText>출항 일시</D_SldText>
                <D_SldContent>2023-12-24 11:23:07</D_SldContent>
                <D_VygtText>항해 시간</D_VygtText>
                <D_vygtContent>09:24:49</D_vygtContent>
              </D_SttContainer>
              <D_EtaContainer>
                <D_EtaText>도착 예상 시간</D_EtaText>
                <D_EdtText>도착 예정 일시</D_EdtText>
                <D_EdtContent>2023-12-25 00:04:24</D_EdtContent>
                <D_RmtText>남은 시간</D_RmtText>
                <D_RmtContent>03:16:28</D_RmtContent>
              </D_EtaContainer>
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
  width: 1920px;
  height: 540px;
  flex-shrink: 0;
  background: #b3dbff;
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
  /* transition: 50ms linear; */
`;

const D_PathContainer = styled.div`
  margin-top: 70px;
  width: 1920px;
  height: 500px;
  flex-shrink: 0;
  background: white;
`;

const D_SttContainer = styled.div`
  left: 122px;
  top: 547px;
  width: 623px;
  height: 417px;
  flex-shrink: 0;
  position: absolute;
  border-radius: 8px;
  background: #b3dbff;
`;

const D_SltText = styled.span`
  color: #000;
  font-family: Noto Serif KR;
  font-size: 32px;
  margin: 16px;
`;

const D_SldText = styled.div`
  color: #000;
  font-family: Noto Serif KR;
  font-size: 24px;
  width: 503px;
`;

const D_SldContent = styled.div`
  color: #000;
  font-family: Noto Serif KR;
  font-size: 54px;
`;

const D_VygtText = styled.div`
  color: #000;
  font-family: Noto Serif KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const D_vygtContent = styled.div`
  color: #000;
  font-family: Noto Serif KR;
  font-size: 54px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const D_EtaText = styled.span`
  display: inline-block;
  font-family: "Noto Serif KR", serif;
  font-size: 32px;
`;

const D_EtaContainer = styled.div`
  left: 1175px;
  top: 547px;
  width: 623px;
  height: 417px;
  flex-shrink: 0;
  position: absolute;
  border-radius: 8px;
  background: #b3dbff;
`;

const D_EdtText = styled.div`
  color: #000;
  font-family: Noto Serif KR;
  width: 503px;
  font-size: 24px;
`;

const D_EdtContent = styled.div`
  color: #000;
  font-family: Noto Serif KR;
  font-size: 54px;
`;

const D_RmtText = styled.div`
  color: #000;
  font-family: Noto Serif KR;
  font-size: 24px;
  margin-top: 7px;
`;

const D_RmtContent = styled.div`
  color: #000;
  font-family: Noto Serif KR;
  font-size: 54px;
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

const M_EtaContainer = styled.div`
  width: 280px;
  height: 147px;
  background-color: white;
  position: relative;
  margin: 0 auto;
  top: 613px;
`;
