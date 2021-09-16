import React from "react";
import ToDoDisplay from "./ToDoDisplay";

const ToDoList = (props) => {
  return (
    <div>
      <ul>
        {props.sortedToDos.map((todo) => (
          <ToDoDisplay
            key={todo.id}
            text={todo.text}
            todo={todo}
            toDos={props.toDos}
            setToDos={props.setToDos}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
