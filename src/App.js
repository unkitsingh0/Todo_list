import React, { useState } from "react";
import "./App.css";
import TodoLists from "./Component/TodoLists";
import { useEffect } from "react";

let getLocalTodoData = () => {
  let todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};

function App() {
  let [inputTodo, setInputTodo] = useState("");
  let [todoData, setTodoData] = useState(getLocalTodoData());

  // This will take input from the user for todo list item
  let TodoInput = (event) => {
    setInputTodo(event.target.value);
  };

  // This function will add the items in todo list
  let subBtn = (event) => {
    event.preventDefault();
    // setTodoData([...todoData,inputTodo]) // This is one method
    if (inputTodo === "") {
      console.log("dekh re baba");
    } else {
      setTodoData((oldItems) => {
        return [...oldItems, inputTodo]; // and we can do like this also
      });
      setInputTodo("");
    }
  };

  // This fucntion will delete the todolist items
  let deletItem = (id) => {
    // console.log(id)
    setTodoData((oldItems) => {
      return oldItems.filter((arrEl, index) => {
        return index !== id; // When index and id will be same then filter method will delete the todo list item
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoData));
  }, [todoData]);
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />

          <h1>ToDo List</h1>
          <br />

          {/* 
        <input type='text' onChange={TodoInput} value={inputTodo} placeholder='Add Todo'/>
      <button onClick={subBtn}>+</button> */}

          <form onSubmit={subBtn}>
            <input
              type="text"
              onChange={TodoInput}
              value={inputTodo}
              placeholder="Add Todo"
            />
            <button>+</button>
          </form>
          <br></br>

          <ol>
            {/* <li>{todoData}</li> */}
            {todoData.map((items, index) => {
              return (
                <TodoLists
                  key={index}
                  id={index}
                  items={items}
                  onSelect={deletItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
