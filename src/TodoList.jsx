import React from 'react'
import ToDoItems from './ToDoItems'

const TodoList = (props) => {
    return (
        <>
            {props.user.map((eachUser) => {
                return (
                    <>
                        <h1>{props.singleUser.name}</h1>
                        <h1>{props.singleUser.email}</h1>
                    </>
                )
            })
            }

        </>
    )
}

export default TodoList