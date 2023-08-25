import React, { useState } from "react";
import styled from "styled-components";

function MobileHeader() {
  const [menu, setMenu] = useState(false);

  const onOpen = () => {
    setMenu(true);
  };

  const onClose = () => {
    setMenu(false);
  };

  return (
    <>
      <FixedBtn onClick={onOpen}>
        <img src='imgs/Vector.svg' />
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
