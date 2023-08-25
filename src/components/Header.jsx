import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

function Header(props) {
  return <Body></Body>;
}

export default Header;

const Body = styled.div`
  display: ${({ flex }) => flex && "flex"};
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 40px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
  background-color: white;
`;
