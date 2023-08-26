import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { css } from "styled-components";

export const Login = () => {
  const [start, setStart] = useState(false);
  const onLink = useNavigate();
  const clickModal = (e) => {
    if (e.target.id === "Modal") {
      setStart(false);
    }
  };
  if (matchMedia("screen and (min-width: 1024px)").matches) {
    return (
      <Wrapper>
        <Modal Start={start} onClick={clickModal} id="Modal">
          {start ? (
            <Container>
              <Logo>
                <img src="/imgs/LogoBack.svg" alt="" />
              </Logo>
              <Inputs>
                <Input type="text" placeholder="이름을 입력하세요" />
                <RoleInput>
                  <option>역할을 입력하세요</option>
                  <option>선장</option>
                  <option>정비원</option>
                  <option>운항사</option>
                  <option>기관사</option>
                  <option>항해사</option>
                </RoleInput>
                <RoleInputBorder></RoleInputBorder>
              </Inputs>
              <Link to="/main" style={{ textDecoration: "none" }}>
                <Enter>
                  <LoginText>로그인</LoginText>
                </Enter>
              </Link>
            </Container>
          ) : (
            <Start>
              <div>
                <h1>
                  내 선박 정보,
                  <br />
                  SQG에서 확인하세요!
                </h1>
                <h2>
                  당신을 위한 선박 서비스
                  <br />
                  SQG, 지금 시작해보세요!
                </h2>
              </div>
              <button onClick={() => setStart(true)}>
                지금 바로 시작하세요!
              </button>
              <DuckWrapper active={true}>
                <Duck src="./imgs/duck.png" alt="러버덕" />
              </DuckWrapper>
            </Start>
          )}
        </Modal>
        <Wave1 />
        <Wave2 />
        <Wave3 />
      </Wrapper>
    );
  } else {
    return (
      <M_Container>
        <M_Logo src="imgs/mobailLogo.svg" alt="logo" />
        <M_SubText>더 효율적인 선박 운항을 위해</M_SubText>
        <M_flexBox>
          <M_nameInput type="text" placeholder="이름" />
          <M_roleInput>
            <option>역할을 입력하세요</option>
            <option>선장</option>
            <option>정비원</option>
            <option>운항사</option>
            <option>기관사</option>
            <option>항해사</option>
          </M_roleInput>
          <M_roleInputBorder></M_roleInputBorder>
          <M_button
            onClick={() => {
              onLink("/mobile");
            }}
          >
            로그인
          </M_button>
        </M_flexBox>
      </M_Container>
    );
  }
};

const M_button = styled.div`
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
  margin-top: 420px;
  width: 320px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #8091e8;
`;

const M_Logo = styled.img`
  margin-top: 55px;
  margin-left: 31px;
`;

const M_Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #252525;
`;

const RoleInput = styled.select`
  background-color: transparent;
  margin-top: 10px;
  border: 1px solid black;
  width: 400px;
  border: none;
  &:focus {
    outline: none;
  }
`;

const RoleInputBorder = styled.div`
  background: black;
  width: 400px;
  height: 1px;
  position: absolute;
  top: 63%;
`;

const M_roleInput = styled.select`
  width: 290px;
  border-bottom: 1px solid #b9b9b9;
  background-color: transparent;
  margin-top: 50px;
  border: none;
  border-radius: 0;
  color: #b9b9b9;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:focus {
    border: none;
    outline: none;
    box-shadow: none;
  }
`;

const M_roleInputBorder = styled.div`
  width: 290px;
  height: 1px;
  background-color: #b9b9b9;
`;

const M_flexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const M_SubText = styled.div`
  color: #fff;
  font-family: Pretendard Variable sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 34px;
`;

const M_nameInput = styled.input`
  margin-top: 70px;
  width: 290px;
  border-bottom: 1px solid #b9b9b9;
  background-color: transparent;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(88, 202, 255, 0.8);
`;

const DuckAnimation2 = keyframes`
  0% {
    transform: translateX(300px) translateY(50px) rotate(30deg);
  }
  25% {
    transform: translateX(0px) translateY(50px) rotate(-30deg);
  }
  49% {
    transform: translateX(-300px) translateY(50px) rotate(30deg);
  }
  50% {
    transform: translateX(-300px) translateY(50px) rotate(-30deg) rotateY(180deg);
  }
  75% {
    transform: translateX(0px) translateY(50px) rotate(30deg) rotateY(180deg);
  }
  99% {
    transform: translateX(300px) translateY(50px) rotate(-30deg) rotateY(180deg);
  }
  100% {
    transform: translateX(300px) translateY(50px) rotate(30deg);
  }
`;

const DuckWrapper = styled.div`
  ${(props) =>
    props.active &&
    css`
      animation: ${DuckAnimation2} 6s infinite linear;
    `}
  width: 200px;
  height: 200px;
  background-color: transparent;
`;

const Duck = styled.img`
  margin-top: 170px;
  width: 200px;
  height: 200px;
  position: absolute;
`;

const LoginText = styled.span`
  color: black;
`;

const move = keyframes`
	100% {
		transform: rotate(360deg);
  }
`;

const Wave1 = styled.div`
  z-index: 1;
  top: 293%;
  width: 4250px;
  height: 4250px;
  position: absolute;
  border-radius: 45%;
  background-color: rgba(54, 191, 255, 0.8);
  animation: ${move} 3s infinite linear;
`;

const Wave2 = styled.div`
  //첫 색 (제일 진한거)
  z-index: 2;
  top: -303%;
  width: 4250px;
  height: 4250px;
  position: absolute;
  border-radius: 46%;
  background-color: rgba(14, 183, 250, 0.8);
  animation: ${move} 5s infinite linear;
`;

const Wave3 = styled.div`
  //하얀색
  z-index: 4;
  top: -313%;
  width: 4250px;
  height: 4250px;
  position: absolute;
  border-radius: 48%;
  background-color: white;
  border: 3px solid lightgray;
  animation: ${move} 6s infinite linear;
`;

const Modal = styled.div`
  // 배경 어둡게
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.Start && "rgba(0, 0, 0, 0.5)"};
  transition: 0.2s;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 40px;
  width: 30%;
  height: 80%;
  background-color: white;
  border-radius: 15px;
  transition: 0.2s;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  & > img {
    width: 100px;
    height: 100px;
  }
`;

const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  margin: 0;
  & > input {
    width: 80%;
    height: 30px;
    font-size: 15px;
    font-weight: bolder;
  }
`;

const Input = styled.input`
  border-bottom: 1px solid black;
`;

const Start = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 50px;
  /* padding-bottom: 300px; */
  & > button {
    border: none;
    width: 80%;
    height: 150px;
    border-radius: 10px;
    background-color: whitesmoke;
    box-shadow: 0px 3px 4px gray;
    cursor: pointer;
    transition: 0.2s;
    font-size: 20px;
    font-weight: bolder;
    &:hover {
      background-color: lightgray;
      transform: scale(1.02);
      transition: 0.2s;
    }
  }
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > h1 {
      font-size: 65px;
      margin: 0;
      & > span {
        color: rgb(14, 183, 250);
      }
    }
  }
`;

const Enter = styled.button`
  width: 400px;
  height: 50px;
  border-radius: 15px;
  border: none;
  background-color: lightgray;
  transition: 0.2s;
  box-shadow: 0px 3px 4px gray;
  font-size: 25px;
  font-weight: bolder;
  margin: 0;
  /* color: black; */
  &:hover {
    background-color: gray;
    transition: 0.2s;
  }
`;
