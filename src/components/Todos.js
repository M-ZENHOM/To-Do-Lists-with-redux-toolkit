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
  min-height: 90vh;
  height: fit-content;
  width: 90%;
  background-color: #ffffff21;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 50px;
`;
export const Todos = () => {
  return (
    <AppContainer>
      <Title>TODO LIST</Title>
      <Wrapper>
        <CreateTodos />
        <DisplayTodos />
      </Wrapper>
    </AppContainer>
  );
};
