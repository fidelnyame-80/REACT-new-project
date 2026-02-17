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
    <section
      className="dashboard-panel animate-fade-in-up p-6 sm:p-7"
      style={{ animationDelay: "260ms" }}
    >
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
          Intake Desk
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-white">Add Patient</h2>
        <p className="mt-2 text-sm text-slate-400">
          Capture patient profile details before the next visit.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="John Carter"
            value={formData.name}
            onChange={handleChange}
            className="input-control"
            required
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="patientId" className="form-label">
            Patient ID
          </label>
          <input
            id="patientId"
            type="text"
            name="patientId"
            placeholder="PT-00492"
            value={formData.patientId}
            onChange={handleChange}
            className="input-control"
            required
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            id="age"
            type="number"
            name="age"
            placeholder="42"
            value={formData.age}
            onChange={handleChange}
            className="input-control"
            required
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="contact" className="form-label">
            Contact
          </label>
          <input
            id="contact"
            type="text"
            name="contact"
            placeholder="+1 555 123 9876"
            value={formData.contact}
            onChange={handleChange}
            className="input-control"
            required
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="medicalNotes" className="form-label">
            Medical Notes
          </label>
          <textarea
            id="medicalNotes"
            name="medicalNotes"
            placeholder="Notes, observations, and treatment remarks..."
            value={formData.medicalNotes}
            onChange={handleChange}
            className="input-control min-h-[120px] resize-y"
          />
        </div>

        <button type="submit" className="btn-primary mt-2 w-full">
          Save Patient
        </button>
      </form>
    </section>
  );
};

export default PatientForm;
