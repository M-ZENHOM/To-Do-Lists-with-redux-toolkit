import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { AddTodo } from "../RTK/slices/todoSlice";

const Btn = styled.button`
  width: 50px;
  height: 50px;
  background: none;
  border: none;
  outline: none;
  font-size: 30px;
  background-color: #542ad9;
  cursor: pointer;
  color: #fff;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 550px;
  height: 50px;
  background-color: #fff;
  color: #000;
  @media (max-width: 640px) {
    width: 300px;
  }
`;

const TaskGroup = styled.div`
  display: flex;
`;

const Alert = styled.p`
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const CreateTodos = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const AddTask = () => {
    if (task !== "") {
      dispatch(AddTodo({ title: task }));
      setTask("");
      setError(false);
    } else {
      setError(!error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && task !== "") {
      dispatch(AddTodo({ title: task }));
      setTask("");
      setError(false);
    }
  };
  return (
    <>
      <TaskGroup>
        <Input
          className="my-5 task-input"
          onChange={(e) => handleChange(e)}
          type="text"
          value={task}
          onKeyUp={handleKeyDown}
        />
        <Btn onClick={() => AddTask()}>+</Btn>
      </TaskGroup>
      {error && <Alert>*The input is empty</Alert>}
    </>
  );
};
