import { format } from "date-fns";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { DeleteTodo, setCompleted } from "../RTK/slices/todoSlice";
import { FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";

const CheckInput = styled.input`
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

const TodoContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 600px;
  min-height: 50px;
  height: fit-content;
  background-color: #ffffff26;
  margin-top: 20px;
  padding: 10px;
  @media (max-width: 768px) {
    width: 350px;
  }
`;
const Todo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;
const Time = styled.p`
  font-size: 12px;
  color: #fff;
  margin-left: 35px;
`;
const Title = styled.p`
  text-align: start;
  margin-left: 15px;
  width: 500px;
  &.completed {
    opacity: 0.7;
    text-decoration: line-through;
  }
  @media (max-width: 768px) {
    width: 240px;
  }
`;
const Box = styled.div`
  display: flex;
`;
const Btn = styled.button`
  width: 40px;
  height: 40px;
  font-size: 20px;
  background-color: #542ad9;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transition: 0.5s;
    background-color: #2d1870;
  }
`;

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <TodoContainer
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
      id={todo.id}
    >
      <Todo>
        <Box>
          <CheckInput
            type="checkbox"
            checked={todo.completed === true}
            onChange={() =>
              dispatch(
                setCompleted({ id: todo.id, completed: !todo.completed })
              )
            }
          />
          <Title className={todo.completed === true && "completed"}>
            {todo.title}
          </Title>
        </Box>
        <Btn onClick={() => dispatch(DeleteTodo({ id: todo.id }))}>
          <FaTrash />
        </Btn>
      </Todo>
      <Time>{format(new Date(todo.time), "p, MM/dd/yyyy")}</Time>
    </TodoContainer>
  );
};
