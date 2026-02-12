import { useState } from 'react'
import TodoForms from "./components/TodoForms";
import TodoList from './components/TodoList';
import {v4 as uuidv4} from "uuid";

function App() {
  const [name, setName] = useState([
    {name: "kayzier", email:"kayzier@gmail.com", id: uuidv4()},
    {name:"Stanley", email: "Stanley@gmail.com", id: uuidv4()},
  ]);
    


  // add new user function
  const addNewUser = (newUser) => {
    setUser([...user,newUser]);
    console.log(user);
    console.log(newUser);
  };
  // console.log(user.name);

  return (
    <div className="flex justify-around">
      <TodoForms addNewUser={addNewUser}/>
      {/* <TodoList user={user}/> */}
      
        
    </div>
  );
}

export default App;
