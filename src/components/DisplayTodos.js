import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  ClearAllTodos,
  DeleteTodo,
  setCompleted,
} from "../RTK/slices/todoSlice";

const TaskItems = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`;

const TaskLi = styled(motion.li)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  outline: none;
  width: 600px;
  min-height: 50px;
  height: fit-content;
  background-color: #ffffff26;
  color: #fff;
  border-radius: 5px;
  &.completed {
    background-color: #10ff1036;
  }
  @media (max-width: 640px) {
    width: 350px;
  }
`;
const Span = styled.span`
  margin-left: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`;
const TaskValue = styled.p`
  display: flex;
  align-items: center;
  width: 400px;
  min-height: 50px;
  height: fit-content;
  padding: 10px;
  text-overflow: ellipsis;
  white-space: wrap;
  overflow: hidden;
`;
const Btn = styled(Button)`
  height: 40px;
  width: 80px;
  margin-right: 20px;
  background-color: #542ad9;
  border-color: #542ad9;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #321b7a;
    border-color: #321b7a;
  }
`;
const Description = styled.p`
  font-weight: bold;
  color: #fff;
  font-size: 20px;
`;
const Wrapper = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #fff;
  padding-top: 15px;
  @media (max-width: 640px) {
    width: 350px;
  }
`;
const Input = styled.input`
  appearance: none;
  height: 20px;
  width: 20px;
  background-color: #957be754;
  cursor: pointer;
  &::before {
    content: "✔";
    display: none;
    line-height: 20px;
    width: 10px;
    height: 10px;
    margin-left: 4px;
    color: #fff;
  }
  &:checked::before {
    display: flex;
  }
`;

export const DisplayTodos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const completedTasks = useSelector((state) =>
    state.todos.filter((task) => task.completed === true)
  );
  return (
    <TaskItems>
      {todos.map((task) => (
        <TaskLi
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ opacity: 0 }}
          className={task.completed === true && "completed"}
          key={task.id}
          id={task.id}
          completed={task.completed === true ? "true" : "false"}
        >
          <Span>
            <Input
              type="checkbox"
              checked={task.completed === true}
              onChange={() =>
                dispatch(
                  setCompleted({ id: task.id, completed: !task.completed })
                )
              }
            />
            {task.completed === true ? (
              <del>
                <TaskValue>{task.title}</TaskValue>
              </del>
            ) : (
              <TaskValue>{task.title}</TaskValue>
            )}
          </Span>
          <Btn
            variant="danger"
            onClick={() => dispatch(DeleteTodo({ id: task.id }))}
          >
            Delete
          </Btn>
        </TaskLi>
      ))}
      {todos.length !== 0 && (
        <Wrapper>
          <Description>
            Total Completed Tasks : {completedTasks.length}
          </Description>
          <Btn variant="danger" onClick={() => dispatch(ClearAllTodos())}>
            Clear all
          </Btn>
        </Wrapper>
      )}
    </TaskItems>
  );
};
