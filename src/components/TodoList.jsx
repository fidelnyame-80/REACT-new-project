import React from 'react'
import TodoItems from "./TodoItems";
function  TodoList (props) {
  return (
    <div>
        {props.user.map(
          (eachUser) => 
        {
      return (
        <>
        <h1>{eachUser.name}</h1>
        <h1>{eachUser.email}</h1>
        </>
      );
          
        })
      }

    </div>
  )
}

export default TodoList;