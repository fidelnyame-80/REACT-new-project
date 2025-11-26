import React from 'react'

const ToDoItems = (props) => {
  return (
<>
<h1>{props.singleUser.name}</h1>
<h1>{props.singleUser.email}</h1>
</>
)
}

export default ToDoItems