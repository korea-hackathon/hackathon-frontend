import React, { useState } from "react";
import styled, { css } from "styled-components";

function Mobile() {
  const [todo, setTodo] = useState([
    {
      title: "M/E 점검",
      content: "메인엔진부하가 90% 를 넘었습니다.",
      type: true,
      success: false,
      id: 0,
    },
    {
      title: "연료, 오일 및 기타 보급품 충당",
      content: "연료를 채워주세요.",
      type: false,
      success: false,
      id: 1,
    },
    {
      title: "선박 기계 수리, 교체",
      content: "이상이 있는 선박의 기계를 수리해 주세요",
      type: false,
      success: false,
      id: 2,
    },
    {
      title: "정비계획서 작성",
      content: "정비계획서를 작성해 주세요",
      type: false,
      success: false,
      id: 3,
    },
  ]);

  const onSuccess = (id) => {
    const newTodo = [...todo];
    newTodo[id].success = true;
    setTodo([...newTodo]);
    setTimeout(() => {
      newTodo[id].success = 2;
      setTodo([...newTodo]);
    }, 220);
    setTimeout(() => {
      const filter = newTodo.filter((element) => element.success != 2);
      filter.map((element, index) => (element.id = index));
      setTodo(filter);
    }, 1000);

    clearTimeout();
  };

  return (
    <Body>
      <Top>
        <img src="imgs/title.svg" />
      </Top>
      <HelloText>
        <img src="imgs/hello.svg" />
        <span>&nbsp;&nbsp;육기준 정비사</span>님 안녕하세요!
      </HelloText>
      <Task>Task</Task>
      <TodoBox>
        {todo.map((element) => (
          <Todo warn={element.type} success={element.success} key={element.id}>
            <TextBox>
              <span>{element.title}</span>
              <br />
              <span>{element.content}</span>
            </TextBox>
            <Success
              onClick={() => {
                onSuccess(element.id);
              }}
            >
              <span>완료하기</span>
            </Success>
            {element.type && <Siren src="imgs/realSiren.svg" />}
          </Todo>
        ))}
      </TodoBox>
    </Body>
  );
}

export default Mobile;

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    #fff 0%,
    rgba(255, 255, 255, 0.76) 36.46%,
    rgba(245, 247, 255, 0.58) 68.75%,
    rgba(132, 159, 255, 0.53) 100%
  );
`;

const Top = styled.div`
  width: 100vw;
  img {
    margin-left: 18px;
    margin-top: 16px;
  }
`;

const HelloText = styled.div`
  margin-top: 25px;
  width: 307px;
  padding-left: 17px;
  height: 36px;
  border-radius: 16px;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.25);
  font-size: 18px;
  display: flex;
  align-items: center;
  span {
    font-weight: 700;
  }
`;

const Task = styled.div`
  margin: 30px 0px;
  font-weight: 700;
  font-size: 25px;
  color: #3a3a3a;
`;

const TodoBox = styled.div`
  width: 330px;
  height: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  overflow-x: hidden;
  > :first-child {
    margin-top: 2px;
  }
  > :last-child {
    margin-bottom: 20px;
  }
`;

const Todo = styled.div`
  position: relative;
  background-color: white;
  padding-top: 16px;
  border-radius: 16px;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.25);
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-style: solid;
  border-width: 1.2px;
  border-color: ${({ warn }) => (warn ? "#E80000" : "#5D86EF")};
  width: 324px;
  height: 94px;
  padding-bottom: 13px;
  opacity: ${({ success }) => (success ? "0.5" : "1")};
  transform: scale(${({ success }) => (success ? "0.9" : "1")});
  left: ${({ success }) => (success == 2 ? "400px" : "0")};
  transition: ${({ success }) =>
    success ? css`0.2s ease-in-out, left 1s ease-in-out` : css`none`};
`;

const TextBox = styled.div`
  margin-left: 17px;
  margin-right: 17px;
  width: 290px;
  > :first-child {
    font-size: 20px;
    font-weight: 700;
  }
  > :last-child {
    font-size: 14px;
    font-weight: 400;
  }
`;

const Success = styled.div`
  width: 300px;
  padding: 6.5px 0;
  border-radius: 16px;
  border: 1.2px solid rgba(0, 0, 0, 0.25);
  margin-top: 12px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Siren = styled.img`
  position: absolute;
  right: 0;
`;
