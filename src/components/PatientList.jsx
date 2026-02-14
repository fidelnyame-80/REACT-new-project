import { useEffect } from "react"; // Allows side effects
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore"; // Firestore functions
import { db } from "../services/firebase"; // Firestore instance
import usePatientStore from "../store/usePatientStore"; // Zustand store

const PatientList = () => {
  // Extract state and functions from Zustand
  const {
    patients,
    setPatients,
    loading,
    setLoading,
    error,
    setError,
    updatePatient,
    deletePatient,
    filteredPatients,
  } = usePatientStore();

  const displayedPatients =
  filteredPatients.length > 0 ? filteredPatients : patients;


  // Fetch patients when component mounts
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        setLoading(true); // Start loading

        // Fetch all documents from "patients" collection
        const querySnapshot = await getDocs(collection(db, "patients"));

        // Convert Firestore documents into usable array
        const patientsData = querySnapshot.docs.map((doc) => ({
          id: doc.id, // Firestore document ID
          ...doc.data(), // Spread patient data
        }));

        setPatients(patientsData); // Store in Zustand
      } catch (err) {
        console.error("Error fetching patients:", err);
        setError("Failed to fetch patients");
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchPatients();
  }, [setPatients, setLoading, setError]);

  // 🔥 UPDATE FUNCTION
  const handleUpdate = async (patient) => {
    try {
      // Ask user for new name (simple example)
      const newName = prompt("Enter new patient name:", patient.name);

      // If user cancels, stop
      if (!newName) return;

      // Create reference to specific document
      const patientRef = doc(db, "patients", patient.id);

      // Update Firestore document
      await updateDoc(patientRef, {
        name: newName, // Only updating name for demo
      });

      // Update local Zustand state
      updatePatient({ ...patient, name: newName });

    } catch (err) {
      console.error("Error updating patient:", err);
      setError("Update failed");
    }
  };

  // 🔥 DELETE FUNCTION
  const handleDelete = async (id) => {
    try {
      // Confirm deletion
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this patient?"
      );

      if (!confirmDelete) return;

      // Create document reference
      const patientRef = doc(db, "patients", id);

      // Delete from Firestore
      await deleteDoc(patientRef);

      // Remove from Zustand state
      deletePatient(id);

    } catch (err) {
      console.error("Error deleting patient:", err);
      setError("Delete failed");
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Loading patients...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-10">{error}</p>;
  }

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Patient Records</h2>

      <div className="overflow-x-auto bg-white shadow rounded-xl">
        <table className="min-w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Patient ID</th>
              <th className="p-3">Age</th>
              <th className="p-3">Last Visit</th>
              <th className="p-3">Actions</th> {/* Added actions column */}
            </tr>
          </thead>

          <tbody>
            {patients.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-4 text-center">
                  No patients found.
                </td>
              </tr>
            ) : (
              displayedPatients.map((patient) => (
                <tr key={patient.id} className="border-t">
                  <td className="p-3">{patient.name}</td>
                  <td className="p-3">{patient.patientId}</td>
                  <td className="p-3">{patient.age}</td>
                  <td className="p-3">
                    {patient.lastVisit
                      ? patient.lastVisit.toDate().toLocaleString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                          timeZoneName: "short",
                        })
                      : "Not Recorded"}
                  </td>

                  {/* ACTION BUTTONS */}
                  <td className="p-3 space-x-2">
                    <button
                      onClick={() => handleUpdate(patient)}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      Update
                    </button>

                    <button
                      onClick={() => handleDelete(patient.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientList;
