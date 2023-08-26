import React from "react";
import styled from "styled-components";
import NewHeader from "../components/newHeader";

const AlramPage = () => {
  return (
    <>
      <NewHeader />
      <Body></Body>
    </>
  );
};

export default AlramPage;

const Body = styled.div`
  background: linear-gradient(
    180deg,
    #fff 0%,
    #fff 72.4%,
    rgba(225, 237, 255, 0.88) 100%
  );
  width: 100vw;
  height: 100vh;
`;
