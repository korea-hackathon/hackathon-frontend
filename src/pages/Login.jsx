import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

export const Login = () => {
  const [start, setStart] = useState(false);
  const clickModal = (e) => {
    if(e.target.id==="Modal") {
      setStart(false)
    }
  }

  return <Wrapper>
    <Modal Start={start} onClick={clickModal} id="Modal">
      { 
        start ? <Container>
        <Logo>
          <h1>SQZ</h1>
          <h2>Ship Quest Guide</h2>
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
          <h2>Ship Quest Guide</h2>
        </div>
        <button onClick={() => setStart(true)}>지금 바로 시작하기</button>
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
`

const move = keyframes`
	100% {
		transform: rotate(360deg);
  }
`

const Wave1 = styled.div`
  z-index: 1;
  top: -360%;
  width: 4000px;
  height: 4000px;
  position: absolute;
  border-radius: 40%;
  background-color: rgba(54, 191, 255, 0.8);
  animation: ${move} 4s infinite linear;
`

const Wave2 = styled.div` //첫 색 (제일 진한거)
  z-index: 2;
  top: -377%;
  width: 4000px;
  height: 4000px;
  position: absolute;
  border-radius: 46%;
  background-color: rgba(14, 183, 250, 0.8);
  animation: ${move} 5s infinite linear;
`

const Wave3 = styled.div` //하얀색
  z-index: 4;
  top: -390%;
  width: 4000px;
  height: 4000px;
  position: absolute;
  border-radius: 48%;
  background-color: white;
  border: 3px solid lightgray;
  animation: ${move} 6s infinite linear;
`

const Modal = styled.div` // 배경 어둡게
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.Start && 'rgba(0, 0, 0, 0.5)'};
  transition: 0.2s;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 30%;
  height: 80%;
  background-color: white;
  border-radius: 15px;
  transition: 0.2s;
`

const Logo = styled.div`
  display: flex;
  flex-direction: column;
`

const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  & > input {
    width: 80%;
    height: 30px;
  }
`

const Input = styled.input`
  border-bottom: 1px solid black;
`

const Start = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70%;
  display: flex;
  flex-direction: column;
  & > button {
    border: none;
    height: 50px;
    border-radius: 10px;
    background-color: white;
    cursor: pointer;
    transition: 0.2s;
    font-size: 20px;
    font-weight: bolder;
    &:hover {
      background-color: lightgray;
      transition: 0.2s;
    }
  }
  & > div {
    & > h1 {
      font-size: 50px;
    }
    & > h2 {
      font-size: 30px;
      color: gray;
    }
  }
`

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
  &:hover {
    background-color: gray;
    transition: 0.2s;
  }
`