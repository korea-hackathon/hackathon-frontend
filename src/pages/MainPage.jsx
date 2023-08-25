import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { Wrapper } from "@googlemaps/react-wrapper";
import Map from "../components/map";

function MainPage() {
  return (
    <>
      <Header />
      <Body>
        <Map />
      </Body>
    </>
  );
}

export default MainPage;

const Body = styled.div``;
