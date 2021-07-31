import { Box, Button, Center, CloseButton, HStack, Input, Spacer, Tag, TagCloseButton, Text, Wrap } from "@chakra-ui/react";
import React, { useEffect, useState } from 'react';
import db from "../firbase";

export const Todo = ({roomId}) => {
  const [todoList, setTodoList] = useState([]);
  const [ todo, setTodo ] = useState({
    value: '',
    done: false,
  });
  const notConfirmList = () => {
    return todoList.filter((todo) => todo.done !== false);
  }
  const confirmedList = () => {
    return todoList.filter((todo) => todo.done !== true);
  }
  const onC = () => {
    if (todo.value !== '') {
      db.collection("Chatting")
      .doc(roomId)
      .update({
          todo: [...todoList, todo]
        })
      setTodo({ value: ''});
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
          value: todoList[i].value
        }
        newTodoList.push(data);
      } else newTodoList.push(todoList[i]);
    }
    setTodoList(newTodoList);
    db.collection("Chatting")
      .doc(roomId)
      .update({
        todo: [...newTodoList]
      })
  }

  useEffect(() => {
    db.collection('Chatting')
      .doc(roomId)
      .onSnapshot((d) => {
        if (d.data().todo !== undefined) {
          setTodoList(d.data().todo);
        }
      });
    
  }, []);
  return (
    <Box w="full" bg="black" borderRadius="10px" p="10px">
      <Box w="full" h="1px" bg="black" mt="3px" mb="10px"></Box>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '60px', maxHeight: '160px', overflowY: 'auto', paddingRight: '5px'}}>
        {
          notConfirmList().map((todo, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between'}}>
              {todo.value}
              {!todo.done ? <button onClick={() => changeTodoState(todo.value, true)}>확인</button> : <button onClick={() => changeTodoState(todo.value, false)}>미확인</button>}
            </div>
          ))
        }
        {
          confirmedList().map((todo, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between'}}>
              {todo.value}
              {!todo.done ? <button onClick={() => changeTodoState(todo.value, true)}>확인</button> : <button onClick={() => changeTodoState(todo.value, false)}>미확인</button>}
            </div>
          ))
        }
      </div>
      <Box w="full" h="1px" bg="black" mt="38px" mb="9px"></Box>
      <Center>
        <div>
          <input style={{ color: 'black', width: '100%', marginBottom: '5px' }} value={todo.value} onChange={onChange}/>

          <div style={{display: 'flex', justifyContent: 'center'}}>
            <button onClick={onC} style={{}}>add todo</button>
          </div>

        </div>
      </Center>
    </Box>
  );
}