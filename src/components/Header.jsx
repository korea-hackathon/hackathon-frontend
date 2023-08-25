import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  console.log(location.pathname);
  if (location.pathname === "/condition") {
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

  return <Body></Body>;
}

export default Header;

const Body = styled.div`
  display: ${({ flex }) => flex && "flex"};
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
  margin-left: 1734px;
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
