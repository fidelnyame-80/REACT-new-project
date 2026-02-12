import { create } from "zustand";
//import { v4 as uuidv4 } from "uuid";

import {db} from '../services/firebase';
import{ collection, addDoc, getDocs} from 'firebase/firestore';

// :new: NEW (ZUSTAND):
// We are creating a GLOBAL store.
// This store replaces local state (useState) that was previously in App.jsx.
const useStuedentsStore = create((set, get) => ({

  // :new: NEW (GLOBAL STATE):
  // This replaces: const [students, setStudents] = useState([]);
  // It holds all students globally so any component can access it.
  students: [],

  // :new: NEW (STORE ACTION):
  // This function replaces setStudents(prev => [...prev, student])
  // It is used to ADD a new student to the global store.
  // addStudents: (student) =>
    // :repeat: SAME UPDATE PATTERN AS BEFORE:
    // "state" here is the current global state (like prevStudents)
    // set((state) => ({
      // :repeat: SAME LOGIC AS LOCAL STATE:
      // We copy the existing students array
      // and add the new student at the end
      // students: [...state.students, { ...student, id: uuidv4() }],
    // })),

    addStudents: async (student) => {
      const docRef = await addDoc(collection(db, "students"), student);
      set(() => ({
        students: [...get().students, {id: docRef.id, ...student}],
      }));
    },

    // name: "kayzier, corse: "react"

    fetchStudents: async () => {
      const snapshot =  await getDocs (collection (db, "students"));
      const userData = snapshot.docs.map((docsnap) => ({
        id: docsnap.id, ...docsnap.data()}
      ));

      set ({ students: userData });
    },



  // :new: NEW (STORE ACTION — DELETE):
  // This function replaces the delete logic we had in StudentsList
  // It receives ONLY the student id and removes that student
  deleteStudent: (id) =>
    set((state) => ({
      // :repeat: SAME DELETE LOGIC AS LOCAL STATE:
      // filter creates a NEW array without the student that matches the id
      students: state.students.filter(
        (student) => student.id !== id
      ),
    })),

  // :new: NEW (STORE ACTION — UPDATE):
  // This function replaces the update logic we had in StudentsList
  // It receives:
  // 1. the student id
  // 2. the updated data (name, course)
  updateStudent: (id, updatedData) =>
    set((state) => ({
      // :repeat: SAME UPDATE LOGIC AS LOCAL STATE:
      // map loops through all students
      // if id matches → update
      // else → return student unchanged
      students: state.students.map((student) =>
        student.id === id
          ? { ...student, ...updatedData }
          : student
      ),
    })),

}));

// :new: EXPORTING THE STORE:
// This allows any component to access or update students using this hook.
export default useStuedentsStore;