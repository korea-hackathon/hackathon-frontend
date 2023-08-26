import styled, { keyframes } from "styled-components"

function NewHeader({ Text, Role }) {
  return <Wrapper>
    <h1>{Text}</h1>
    <h1>{Role}</h1>
  </Wrapper>
}

export default NewHeader;

const FadeIn = keyframes`
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
`

const Wrapper = styled.div`
  width: 392.234px;
  height: 61.082px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.40);
  background: #FFF;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
  animation: ${FadeIn} 0.5s;
  & > h1 {
    font-size: 22px;
  }
`