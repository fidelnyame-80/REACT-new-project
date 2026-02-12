import { useEffect, useState } from "react";

// :new: NEW (ZUSTAND):
// We no longer receive students or setStudents as props.
// Instead, we import the global store.
// import useStuedentsStore from "../store/studentsStore";

import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";
import useStuedentsStore from "../Store/StudentsStore";

const StudentsList = ({students, setStudents}) => {

  // :x: REMOVED (LOCAL STATE VERSION):
  // We used to receive students like this:
  // const StudentsList = ({ students, setStudents }) => { ... }

  // :new: NEW (ZUSTAND - READ DATA):
  // This replaces the `students` prop.
  // We are now reading students directly from the global store.
  // ?
  // :x: REMOVED (LOCAL STATE VERSION):
  // Delete logic used to live here:
  // setStudents(prev => prev.filter(...))

  // :new: NEW (ZUSTAND - ACTIONS):
  // These functions replace local delete and update logic.
  // The actual logic now lives inside the store.

  // Firestore Start
  const fetchStudents = useStuedentsStore((state) => state.fetchStudents);
  

  useEffect(() => {
    fetchStudents()
  }, [fetchStudents])
//  /
  // :white_check_mark: STILL LOCAL UI STATE:
  // These states were NOT moved to Zustand because:
  // - they are temporary
  // - they control UI (modals)
  const [studentToDelete, setStudentToDelete] = useState(null);
  const [studentToEdit, setStudentToEdit] = useState(null);


  // const handleDelete = (id) => {
  //   setStudents((prev) =>
  //     prev.filter((student) => student.id !== id));
  //   setStudentToDelete(null);
  // };

  const handleUpdate = (id, name, course) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id
    ? { ...student, name, course } : student
      )
    );
    setStudentToEdit(null);
  };

  // :repeat: CHANGED (TRANSITION POINT):
  // Before Zustand, this function used setStudents(...)
  // Now, it sends ONLY the student id to the global store.
  // const handleConfirmDelete = (id) => {
  //   // :new: SEND TO GLOBAL STORE
  //   deleteStudent(id);

  //   // :repeat: SAME UI BEHAVIOR AS BEFORE
  //   setStudentToDelete(null);
  // };

  // :repeat: CHANGED (TRANSITION POINT):
  // Before Zustand, update logic used map() here.
  // Now, we send the data to the store and let the store handle it.
  // const handleUpdate = (id, name, course) => {
  //   // :new: SEND UPDATED DATA TO GLOBAL STORE
  //   updateStudent(id, { name, course });

  //   // :repeat: SAME UI BEHAVIOR AS BEFORE
  //   setStudentToEdit(null);
  // };

  return (
    <div style={listStyle}>
      {students.map((student) => (
        <div key={student.id} style={itemStyle}>
          <span>
            {student.name}: {student.course}
          </span>

          {/* :repeat: SAME UI AS BEFORE:
              Buttons did NOT change because of Zustand.
          */}
          <div>
            <button
              style={editBtn}
              onClick={() => setStudentToEdit(student)}
            >
              Edit
            </button>

            <button
              style={deleteBtn}
              onClick={() => setStudentToDelete(student)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {/* :repeat: SAME MODAL LOGIC AS BEFORE:
          Zustand did NOT change how modals open or close.
      */}
      {studentToDelete && (
        <DeleteModal
          student={studentToDelete}
          // onConfirm={handleConfirmDelete}
          onCancel={() => setStudentToDelete(null)}
        />
      )}

      {studentToEdit && (
        <UpdateModal
          student={studentToEdit}
          onUpdate={handleUpdate}
          onCancel={() => setStudentToEdit(null)}
        />
      )}
    </div>
  );
};

export default StudentsList;

// :art: STYLES ONLY — NO STATE OR LOGIC CHANGES
const listStyle = {
  marginTop: "20px",
};

const itemStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#E0FFE0",
  marginBottom: "6px",
  padding: "8px",
  borderRadius: "6px",
};

const editBtn = {
  marginRight: "8px",
};

const deleteBtn = {
  backgroundColor: "red",
  color: "white",
  border: "none",
  padding: "4px 8px",
  borderRadius: "4px",
};