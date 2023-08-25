import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Mappp from "../components/mappp";
import MobileHeader from "../components/MobileHeader";

function Quest() {
  return (
    <>
      <MobileHeader />
      <Body>
        <Mappp></Mappp>
      </Body>
    </>
  );
}

export default Quest;

const Body = styled.div``;
