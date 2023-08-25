import React from "react";
import styled from "styled-components";
import Mappp from "../components/mappp";
import RealHeader from "../components/RealHeader";

function Quest() {
  return (
    <>
      <RealHeader />
      <Body>
        <Mappp></Mappp>
      </Body>
    </>
  );
}

export default Quest;

const Body = styled.div``;
