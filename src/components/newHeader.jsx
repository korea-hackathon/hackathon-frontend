import React from "react";
import styled from "styled-components";

function NewHeader() {
  return (
    <Body>
      <MainBox>
        <Img1 src='imgs/Logo.svg' />
        <TitleBox>
          <Title>SQG</Title>
          <SubTitle>Ship Quest Guide</SubTitle>
        </TitleBox>
      </MainBox>
      <DashBoardBox>
        <Img2 src='imgs/DashBoard.svg' />
      </DashBoardBox>
    </Body>
  );
}

export default NewHeader;

const Body = styled.div`
  width: 360px;
  height: 100vh;
  position: fixed;
  background-color: white;
  box-shadow: 3px 0 5px 0px rgba(0, 0, 0, 0.25);
  z-index: 2;
`;

const MainBox = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 40px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #5c6ecd;
`;

const SubTitle = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #8493e2;
`;

const Img1 = styled.img`
  width: 60px;
`;

const Img2 = styled.img`
  width: 20px;
  height: 20px;
`;

const DashBoardBox = styled.div`
  width: 320px;
  height: 60px;
  background-color: #f0f0f0;
  border-radius: 15px;
  margin-left: 20px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
`;
