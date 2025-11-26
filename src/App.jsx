import React from 'react'
import ToDoForms from './ToDoForms'
import TodoList from './TodoList'
import {v4 as uuidv4} from "uuid"


const App = () => {
const  [user, setUser] = useState([
  {name: "Fidel", email: "fidel@email.com", id: uuidv4()},
  {name: "nyame", email: "nyame@email.com", id: uuidv4()}
])

//add new user functionn
const addNewUser = (newUser) => {
  //[...user, newUser]
  setUser([...user, newUser]);
  console.log(user);
  console.log(newUser);
}
console.log(user.name);

  return (
    <div className='flex justify-around'>
      <ToDoForms addUser={addNewUser} />
      <TodoList user={user} /> 
    </div>
  )
}

export default App