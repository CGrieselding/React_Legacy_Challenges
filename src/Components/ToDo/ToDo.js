import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

const ToDo = () => {
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [option, setOption] = useState("All");
  const [sortedToDos, setSortedToDos] = useState([]);

  const sortedHandler = () => {
    switch (option) {
      case "Completed":
        setSortedToDos(toDos.filter((todo) => todo.completed === true));
        break;
      case "Uncompleted":
        setSortedToDos(toDos.filter((todo) => todo.completed === false));
        break;
      default:
        setSortedToDos(toDos);
        break;
    }
  };

  useEffect(() => {
    sortedHandler();
  }, [toDos, option]);

  return (
    <Container className="App">
      <br />
      <h1 className="App-intro">
        In this challenge your goal is to create a to do list:
      </h1>
      <hr />
      <ul>
        <li>ability to accept a task from a user</li>
        <li>ability to add this to the state</li>
        <li>ability to display all of the tasks</li>
        <li>
          ability to evaluated if a task was completed and update the state
        </li>
      </ul>
      <hr />
      <h1 className="display-4">Cameron's To-Do List:</h1>
      <ToDoForm
        inputText={inputText}
        setInputText={setInputText}
        toDos={toDos}
        setToDos={setToDos}
        setOption={setOption}
      />
      <ToDoList toDos={toDos} setToDos={setToDos} sortedToDos={sortedToDos} />
    </Container>
  );
};

export default ToDo;
