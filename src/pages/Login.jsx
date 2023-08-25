import styled, { keyframes } from 'styled-components';

export const Login = () => {
  return <Wrapper>
    <Modal />
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
  animation: ${move} 3s infinite linear;
`

const Wave2 = styled.div` //첫 색 (제일 진한거)
  z-index: 2;
  top: -377%;
  width: 4000px;
  height: 4000px;
  position: absolute;
  border-radius: 46%;
  background-color: rgba(14, 183, 250, 0.8);
  animation: ${move} 4s infinite linear;
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
  z-index: 5;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`