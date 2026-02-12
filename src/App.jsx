// ❌ REMOVED (LOCAL STATE VERSION):
// We no longer need useState here because students data
// has been moved to the global Zustand store.
import { useState } from "react";
// import DeleteModal from "./Component/DeleteModal";
import StudentForm from "./Component/StudentForm";
import StudentsList from "./Component/StudentList";
// import UpdateModal from "./Component/UpdateModal";

const App = () => {

  // ❌ REMOVED (WEEK 1 – BEFORE ZUSTAND):
  // The state below used to live here:
  const [students, setStudents] = useState([]);

  return (
    <div style={appStyle}>      <h1 style={{ textAlign: "center" }}>Student Register</h1>

      {/* 🔁 CHANGED:
          We are no longer passing props like setStudents or students.
          Each component now accesses the global store directly.
      */}
      <StudentForm />
      <StudentsList students={students} setStudents={setStudents}/>
      {/* <DeleteModal />
      <UpdateModal /> */}
      
    </div>
  );
};

export default App;

// 🎨 STYLING ONLY (NO STATE OR LOGIC CHANGES)
const appStyle = {
  maxWidth: "400px",
  margin: "40px auto",
  padding: "20px",
  backgroundColor: "#f9f9f9",
  borderRadius: "10px",
};