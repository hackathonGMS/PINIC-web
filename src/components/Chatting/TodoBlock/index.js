import { Box, Button, Center, InputGroup, InputRightElement, Input, Spacer, Tag, TagCloseButton, Text, Wrap } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import db from "../firbase";
import "./index.css";

export const Todo = ({ roomId }) => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState({
    value: "",
    done: false,
  });
  const notConfirmList = () => {
    return todoList.filter((todo) => todo.done !== false);
  };
  const confirmedList = () => {
    return todoList.filter((todo) => todo.done !== true);
  };
  const onC = () => {
    if (todo.value !== "") {
      db.collection("Chatting")
        .doc(roomId)
        .update({
          todo: [...todoList, todo],
        });
      setTodo({ value: "" });
    }
  };
  const onChange = (e) => {
    setTodo({ value: e.target.value, done: false });
  };
  const changeTodoState = (t, state) => {
    const newTodoList = [];
    for (let i in todoList) {
      if (todoList[i].value === t) {
        const data = {
          done: state,
          value: todoList[i].value,
        };
        newTodoList.push(data);
      } else newTodoList.push(todoList[i]);
    }
    setTodoList(newTodoList);
    db.collection("Chatting")
      .doc(roomId)
      .update({
        todo: [...newTodoList],
      });
  };

  useEffect(() => {
    db.collection("Chatting")
      .doc(roomId)
      .onSnapshot((d) => {
        if (d.data().todo !== undefined) {
          setTodoList(d.data().todo);
        }
      });
  }, []);
  return (
    <Box w="full" h="full" bg="black" borderRadius="10px" p="10px" d="flex" justifyContent="space-between" flexDirection="column">
      <div
        className="scroll"
        style={{ display: "flex", flexDirection: "column", minHeight: "60px", maxHeight: "160px", overflowY: "auto", paddingRight: "5px" }}>
        {notConfirmList().map((todo, index) => (
          <div key={index} style={{ display: "flex", justifyContent: "space-between" }}>
            {todo.value}
            <div style={{ display: "flex", alignSelf: "center" }}>
              <input type="checkbox" checked={todo.done} onChange={() => changeTodoState(todo.value, false)} />
            </div>
          </div>
        ))}
        {confirmedList().map((todo, index) => (
          <div key={index} style={{ display: "flex", justifyContent: "space-between" }}>
            {todo.value}
            <div style={{ display: "flex", alignSelf: "center" }}>
              <input type="checkbox" checked={todo.done} onChange={() => changeTodoState(todo.value, true)} />
            </div>
          </div>
        ))}
      </div>
      <Center>
        <InputGroup size="xs">
          <Input
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onC();
              }
            }}
            pr="0.5rem"
            fontSize="14px"
            type="text"
            value={todo.value}
            onChange={onChange}
            placeholder="체크리스트를 작성해주세요"
          />
        </InputGroup>
      </Center>
    </Box>
  );
};
