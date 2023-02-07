import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ClearAllTodos } from "../RTK/slices/todoSlice";
import { TodoItem } from "./TodoItem";

const TodoFoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 600px;
  margin-top: 15px;
  h2 {
    color: #fff;
  }
  @media (max-width: 768px) {
    width: 350px;
    h2 {
      font-size: 18px;
    }
  }
`;
const Btn = styled.button`
  width: fit-content;
  height: 40px;
  font-size: 18px;
  background-color: #542ad9;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
  padding: 7px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  &:hover {
    transition: 0.5s;
    background-color: #2d1870;
  }
`;

export const DisplayTodos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const completedTasks = useSelector((state) =>
    state.todos.filter((task) => task.completed === true)
  );
  const sortedTodoList = [...todos];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));
  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          todos={todos}
          completedTasks={completedTasks}
        />
      ))}
      {todos.length !== 0 && (
        <TodoFoot>
          <h2>Completed Todos: {completedTasks.length}</h2>
          <Btn onClick={() => dispatch(ClearAllTodos())}>CLEAR TODOS</Btn>
        </TodoFoot>
      )}
    </>
  );
};
