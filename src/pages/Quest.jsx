import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { Wrapper } from "@googlemaps/react-wrapper";
import Mappp from "../components/mappp";
import MobileHeader from "../components/MobileHeader";

function Quest() {
  return (
    <>
      <MobileHeader />
      <Body>
        <Wrapper>
          <Mappp />
        </Wrapper>
      </Body>
    </>
  );
}

export default Quest;

const Body = styled.div``;
