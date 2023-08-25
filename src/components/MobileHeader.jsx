import React, { useState } from "react";
import styled from "styled-components";

function MobileHeader(props) {
  const [menu, setMenu] = useState(false);

  const onOpen = () => {
    setMenu(true);
  };

  const onClose = () => {
    setMenu(false);
  };

  if (props.page === "precondition") {
    if (props.mode === "port") {
      return (
        <Body flex={true}>
          <LogoStyle src="imgs/conditionLogo.png" alt="logo" />
          <NowMenu>이동현황</NowMenu>
          <Homebutton mode={"prec"} href="/Main">
            <img src="imgs/home.png" alt="homeIcon" width={"24px"} />
          </Homebutton>
        </Body>
      );
    } else if (props.mode === "land") {
      return (
        <Body flex={true}>
          <LogoStyle src="imgs/conditionLogo.png" alt="logo" />
          <Line />
          <NowMenu>이동현황</NowMenu>
          <Homebutton mode={"land"} href="/Main">
            <img src="imgs/home.png" alt="homeIcon" width={"24px"} />
          </Homebutton>
        </Body>
      );
    }
  }

  return (
    <>
      <FixedBtn onClick={onOpen}>
        <img src="imgs/Vector.svg" />
      </FixedBtn>
      <LeftMenu menu={menu}></LeftMenu>
      {menu && <BackGround onClick={onClose}></BackGround>}
    </>
  );
}

export default MobileHeader;

const FixedBtn = styled.div`
  width: 48px;
  padding-left: 2px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  top: 10px;
  left: 10px;
  background-color: white;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftMenu = styled.div`
  transition: 1s ease-in-out;
  left: ${({ menu }) => (menu ? "0" : "-160px")};
  width: 150px;
  height: 100vh;
  z-index: 4;
  position: fixed;
  background-color: white;
  box-shadow: 3px 0px 5px 3px rgba(0, 0, 0, 0.25);
`;

const BackGround = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Body = styled.div`
  display: ${({ flex }) => flex && "flex"};
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 40px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
  background-color: white;
`;

const LogoStyle = styled.img`
  margin: 5px;
  width: 30px;
`;

const Homebutton = styled.a`
  width: 24px;
  margin: 8px;
  margin-left: ${({ mode }) => {
    if (mode === "prec") {
      return "184px";
    } else if (mode === "land") {
      return "614px";
    }
  }};
  height: 24px;
  border: 0;
  background-color: transparent;
  padding: 0;
`;

const NowMenu = styled.span`
  font-family: "Noto Serif KR", serif;
  font-size: 24px;
  margin: 5px;
`;

const Line = styled.div`
  width: 1px;
  height: 29px;
  background-color: black;
  margin: 5px;
`;
