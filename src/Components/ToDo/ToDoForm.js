import React from "react";

const ToDoForm = (props) => {
  const inputTextHandler = (e) => {
    // console.log(e.target.value)
    props.setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.setToDos([
      ...props.toDos,
      {
        text: props.inputText,
        completed: false,
        id: Math.random() * 10000,
      },
    ]);
    props.setInputText("");
  };

  const optionHandler = (e) => {
    //   console.log(e.target.value)
    props.setOption(e.target.value)
  }

  return (
    <form>
      <input type="text" value={props.inputText} onChange={inputTextHandler} />
      <button type="submit" onClick={submitHandler}>
        Add To List
      </button>
      <div>
        <select name="todos" onChange={optionHandler}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default ToDoForm;
