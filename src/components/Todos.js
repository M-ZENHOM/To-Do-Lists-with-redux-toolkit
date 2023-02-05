import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { CreateTodos } from "./CreateTodos";
import { DisplayTodos } from "./DisplayTodos";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #542ad9;
  font-size: 40px;
  font-weight: normal;
  padding-top: 50px;
  padding-bottom: 50px;
`;
const AppContainer = styled(Container)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 90vh;
  width: 90%;
  background-color: #ffffff21;
  border-radius: 10px;
`;
export const Todos = () => {
  return (
    <AppContainer>
      <Title>TO-DO LIST APP</Title>
      <Wrapper>
        <CreateTodos />
        <DisplayTodos />
      </Wrapper>
    </AppContainer>
  );
};
