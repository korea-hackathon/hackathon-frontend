import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

function Header(props) {
  if (props.page === "precondition") {
    return (
      <Body flex={true}>
        <img src="" alt="logo" />
        <h5>이동현황</h5>
      </Body>
    );
  } else if (props.page === "landscape") {
    return (
      <Body flex={true}>
        <img src="" alt="logo" />
        <h5>이동현황</h5>
      </Body>
    );
  }
  return <Body></Body>;
}

export default Header;

const Body = styled.div`
  display: ${({ flex }) => flex && "flex"};
  width: 100vw;
  height: 40px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
`;
