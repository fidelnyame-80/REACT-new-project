import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firebase";

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    patientId: "",
    age: "",
    contact: "",
    medicalNotes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "patients"), {
        ...formData,
        age: Number(formData.age),
        lastVisit: serverTimestamp(),
      });

      setFormData({
        name: "",
        patientId: "",
        age: "",
        contact: "",
        medicalNotes: "",
      });

      alert("Patient added successfully");
    } catch (error) {
      console.error("Error adding patient:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold mb-4">Add Patient</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded"
        required
      />

      <input
        type="text"
        name="patientId"
        placeholder="Patient ID"
        value={formData.patientId}
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded"
        required
      />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded"
        required
      />

      <input
        type="text"
        name="contact"
        placeholder="Contact"
        value={formData.contact}
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded"
        required
      />

      <textarea
        name="medicalNotes"
        placeholder="Medical Notes"
        value={formData.medicalNotes}
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded"
      />

      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Save Patient
      </button>
    </form>
  );
};

export default PatientForm;
