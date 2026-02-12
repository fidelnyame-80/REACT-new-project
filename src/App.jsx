import React, { useState } from 'react'
import ChildComponent from './ChildComponent';
import ApiComponent from './ApiComponent';

const App = () => {
  //create a state to help unmount the component
  const [show ,setShow] = useState(true)

  //craete a function to unmount the component
  const handleShow = () => {
     setShow(!show)
  }
  return (
    <div>
      <button style={{backgroundColor: "red"}} onClick={handleShow}>Unmount component</button>
    
      {show && <ChildComponent />}
      {show && <ApiComponent />}
    </div>
  )
}

export default App;
