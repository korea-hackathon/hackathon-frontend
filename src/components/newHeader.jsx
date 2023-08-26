import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

function NewHeader() {
  const onLink = useNavigate();
  const [open, setOpen] = useState(true);

  return (
    <>
      <Body open={open}>
        <MainBox>
          <Img1 src="imgs/Logo.svg" />
          <TitleBox>
            <Title>SQG</Title>
            <SubTitle>Ship Quest Guide</SubTitle>
          </TitleBox>
        </MainBox>
        <Box
          onClick={() => {
            onLink("/main");
          }}
        >
          <Img2 src="imgs/home.png" />
          <div>메인 페이지</div>
        </Box>
        <Box
          onClick={() => {
            onLink("/dashBoard");
          }}
        >
          <Img2 src="imgs/DashBoard.svg" />
          <div>대시보드</div>
        </Box>
      </Body>
      <Btn
        onClick={() => {
          setOpen(!open);
        }}
        open={open}
      >
        <Img2 src="imgs/right-arrow.png" open={open} />
      </Btn>
    </>
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
  left: ${({ open }) => (open ? "0px" : "-365px")};
  transition: 0.5s ease-in-out;
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
  margin-left: 10px;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "null")};
`;

const Box = styled.div`
  cursor: pointer;
  width: 320px;
  height: 60px;
  background-color: #f9f9f9;
  border-radius: 15px;
  margin-left: 20px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  div {
    margin-left: 10px;
    font-size: 20px;
  }
`;

const Btn = styled.div`
  cursor: pointer;
  width: 50px;
  height: 80px;
  background-color: white;
  border-radius: 0 0 15px 0;
  position: fixed;
  z-index: 3;
  left: 360px;
  left: ${({ open }) => (open ? "360px" : "-5px")};
  transition: 0.5s ease-in-out;
  box-shadow: 3px 0 5px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
`;
