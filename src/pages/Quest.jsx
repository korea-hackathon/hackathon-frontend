import React from "react";
import styled from "styled-components";
import Map from "../components/realMap";
import RealHeader from "../components/RealHeader";

function Quest() {
  return (
    <>
      <RealHeader />
      <Body>
        <Map />
      </Body>
    </>
  );
}

export default Quest;

const Body = styled.div``;
