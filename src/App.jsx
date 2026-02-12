import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Form from './Components/form';
import UserList from './Components/userlist';
import { useState } from 'react';



const App = () => {
  //  const [user, setUser] = useState([
  //   {name: "kayzier", email: "kayzier@example.com", id: uuidv4()},
  //   {name: "kita", email: "kita@example.com", id: uuidv4()}
  // ]);

// const addNewUser = (newUser) => {
//     setUser([...user, newUser]);

// }
    
return (
    <div className='flex justify-around'>
      <TodoForms /> {/* passing the function as a prop to the ToDoForms component */}
      <TodoList user={user} /> {/* passing the user state as a prop to the ToDoList component */}
      {/* <TodoItems /> */}
    </div>
  )
}

export default App;
