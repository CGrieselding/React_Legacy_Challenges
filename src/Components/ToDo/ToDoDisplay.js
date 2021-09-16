import React from "react";

const ToDoDisplay = (props) => {
  const deleteToDo = () => {
    props.setToDos(
      props.toDos.filter((current) => current.id !== props.todo.id)
    );
  };

  const completeToDo = () => {
    props.setToDos(
      props.toDos.map((item) => {
        if (item.id === props.todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <li className={`toDoItem ${props.todo.completed ? "completedItem" : ""}`}>
        {props.text}
      </li>
      <button onClick={completeToDo}>Mark Complete</button>
      <button onClick={deleteToDo}>Delete</button>
    </div>
  );
};

export default ToDoDisplay;
