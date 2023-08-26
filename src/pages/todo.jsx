import React, { useState } from "react";
import styled from "styled-components";
import NewHeader from "../components/newHeader";

const TodoPage = () => {
  const [todo, setTodo] = useState([
    {
      title: "M/E 점검",
      content: "메인엔진부하가 90% 를 넘었습니다.",
      type: true,
    },
    {
      title: "연료, 오일 및 기타 보급품 충당",
      content: "연료를 채워주세요.",
      type: false,
    },
    {
      title: "선박 기계 수리, 교체",
      content: "이상이 있는 선박의 기계를 수리해 주세요",
      type: false,
    },
  ]);

  return (
    <>
      <NewHeader />
      <Body>
        {todo.map((element) => {
          <Todo>
            <span>{element.title}</span>
            {element.type && <img src="imgs/warn.svg" />}
            <span>{element.content}</span>
          </Todo>;
        })}
      </Body>
    </>
  );
};

export default TodoPage;

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

const Todo = styled.div`
  width
`;
