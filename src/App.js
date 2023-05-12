import React, { useState } from 'react'
import './App.css';
import TodoLists from './Component/TodoLists';

function App() {
  let [inputTodo,setInputTodo] = useState("")
  let [todoData,setTodoData]=useState([])

  // This will take input from the user for todo list item 
  let TodoInput =event=>{
    
    setInputTodo(event.target.value)
  }


  // This function will add the items in todo list 
  let subBtn = ()=>{
    // setTodoData([...todoData,inputTodo]) // This is one method 
    if(inputTodo===''){
      console.log('dekh re baba')
    }else{

      setTodoData((oldItems)=>{
        return [...oldItems,inputTodo] // and we can do like this also 
      })
      setInputTodo('')
    }
  }

  // This fucntion will delete the todolist items 
  let deletItem=(id)=>{
    // console.log(id)
    setTodoData(oldItems=>{ 
      return oldItems.filter((arrEl,index)=>{
        return index !== id; // When index and id will be same then filter method will delete the todo list item
      })
    })
}
  return (
    <>
    <div className='main_div'>
      <div className='center_div'>
        <br/>

        <h1>ToDo List</h1>
        <br/>

        <input type='text' onChange={TodoInput} value={inputTodo} placeholder='Add Todo'/>
      <button onClick={subBtn}>+</button>
    <br>
    </br>

    <ol>
      {/* <li>{todoData}</li> */}
      {todoData.map((items,index)=>{
        return(
        <TodoLists
        key={index}
        id={index}
        items={items}
        onSelect={deletItem} 
        />
        )
      })}
    </ol>
      </div>
    </div>
    </>
  );
}

export default App;
