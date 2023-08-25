import { useState } from "react";
import styled, { keyframes } from "styled-components";

export const Login = () => {
  const [start, setStart] = useState(false);
  const clickModal = (e) => {
    if (e.target.id === "Modal") {
      setStart(false);
    }
  };
  ㄴ
  return <Wrapper>
    <Modal Start={start} onClick={clickModal} id="Modal">
      { 
        start ? <Container>
        <Logo>
          <img src="/imgs/LogoBack.svg" alt="" />
        </Logo>
        <Inputs>
          <Input type="text" placeholder="아이디를 입력하세요" />
          <Input type="password" placeholder="비밀번호를 입력하세요" />
        </Inputs>
        <Enter>로그인</Enter>
      </Container>
      : <Start>
        <div>
          <h1>내 선박 정보,<br />SQZ에서 확인하세요!</h1>
          <h2>Lorem Ipsum Dollar 122345<br />54321 Dollar Ipsum Lorem</h2>
        </div>
        <button onClick={() => setStart(true)}>지금 바로 시작하세요!</button>
      </Start>
      }
    </Modal>
    <Wave1 />
    <Wave2 />
    <Wave3 />
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(88, 202, 255, 0.8);
`;

const move = keyframes`
	100% {
		transform: rotate(360deg);
  }
`;

const Wave1 = styled.div`
  z-index: 1;
  top: -350%;
  width: 4000px;
  height: 4000px;
  position: absolute;
  border-radius: 45%;
  background-color: rgba(54, 191, 255, 0.8);
  animation: ${move} 3s infinite linear;
`

const Wave2 = styled.div`
  //첫 색 (제일 진한거)
  z-index: 2;
  top: -370%;
  width: 4000px;
  height: 4000px;
  position: absolute;
  border-radius: 46%;
  background-color: rgba(14, 183, 250, 0.8);
  animation: ${move} 5s infinite linear;
`;

const Wave3 = styled.div`
  //하얀색
  z-index: 4;
  top: -380%;
  width: 4000px;
  height: 4000px;
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
`

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
  height: 80%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 50px;
  /* padding-bottom: 300px; */
  & > button {
    border: none;
    width: 80%;
    height: 80px;
    border-radius: 10px;
    background-color: white;
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
  width: 70%;
  height: 50px;
  border-radius: 15px;
  border: none;
  background-color: lightgray;
  transition: 0.2s;
  box-shadow: 0px 3px 4px gray;
  font-size: 25px;
  font-weight: bolder;
  margin: 0;
  &:hover {
    background-color: gray;
    transition: 0.2s;
  }
`;
