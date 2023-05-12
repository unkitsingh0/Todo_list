import React from 'react'

function TodoLists({key,id,items,onSelect}) {
  
  return (
    <>
    <div className='Todo_list'>
    {/* in this we are calling function using props in App Component */}
    <i className="fa-solid fa-circle-xmark " onClick={()=>{
        onSelect(id)
    }} ></i>
    <li>{items}</li>
    </div>
    </>
  )
}

export default TodoLists