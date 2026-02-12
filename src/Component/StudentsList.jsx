import { useState } from "react";

// 🆕 NEW (ZUSTAND):
// We no longer receive students or setStudents as props.
// Instead, we import the global store.
// import useStuedentsStore from "../store/studentsStore";
import useStuedentsStore from "../Store/studentsStore";

import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";

const StudentsList = () => {

  // ❌ REMOVED (LOCAL STATE VERSION):
  // We used to receive students like this:
  // const StudentsList = ({ students, setStudents }) => { ... }

  // 🆕 NEW (ZUSTAND - READ DATA):
  // This replaces the `students` prop.
  // We are now reading students directly from the global store.
  const students = useStuedentsStore((state) => state.students);

  // ❌ REMOVED (LOCAL STATE VERSION):
  // Delete logic used to live here:
  // setStudents(prev => prev.filter(...))

  // 🆕 NEW (ZUSTAND - ACTIONS):
  // These functions replace local delete and update logic.
  // The actual logic now lives inside the store.
  const deleteStudent = useStuedentsStore(
    (state) => state.deleteStudent
  );

  const updateStudent = useStuedentsStore(
    (state) => state.updateStudent
  );

  // ✅ STILL LOCAL UI STATE:
  // These states were NOT moved to Zustand because:
  // - they are temporary
  // - they control UI (modals)
  const [studentToDelete, setStudentToDelete] = useState(null);
  const [studentToEdit, setStudentToEdit] = useState(null);

  // 🔁 CHANGED (TRANSITION POINT):
  // Before Zustand, this function used setStudents(...)
  // Now, it sends ONLY the student id to the global store.
  const handleConfirmDelete = (id) => {
    // 🆕 SEND TO GLOBAL STORE
    deleteStudent(id);

    // 🔁 SAME UI BEHAVIOR AS BEFORE
    setStudentToDelete(null);
  };

  // 🔁 CHANGED (TRANSITION POINT):
  // Before Zustand, update logic used map() here.
  // Now, we send the data to the store and let the store handle it.
  const handleUpdate = (id, name, course) => {
    // 🆕 SEND UPDATED DATA TO GLOBAL STORE
    updateStudent(id, { name, course });

    // 🔁 SAME UI BEHAVIOR AS BEFORE
    setStudentToEdit(null);
  };

  return (
    <div style={listStyle}>
      {students.map((student) => (
        <div key={student.id} style={itemStyle}>
          <span>
            {student.name}: {student.course}
          </span>

          {/* 🔁 SAME UI AS BEFORE:
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

      {/* 🔁 SAME MODAL LOGIC AS BEFORE:
          Zustand did NOT change how modals open or close.
      */}
      {studentToDelete && (
        <DeleteModal
          student={studentToDelete}
          onConfirm={handleConfirmDelete}
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

// 🎨 STYLES ONLY — NO STATE OR LOGIC CHANGES
const listStyle = {
  marginTop: "20px",
};

const itemStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#e0ffe0",
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





