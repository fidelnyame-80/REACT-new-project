import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import usePatientStore from "../store/usePatientStore";
import filterPatients from "../utils/filterPatients";

const PatientList = () => {
  const {
    patients,
    loading,
    error,
    updatePatient,
    deletePatient,
    searchQuery,
    ageFilter,
    idFilter,
    lastVisitFilter,
    filtersApplied,
  } = usePatientStore();

  const displayedPatients = filtersApplied
    ? filterPatients(patients, {
        searchQuery,
        ageFilter,
        idFilter,
        lastVisitFilter,
      })
    : patients;

  const handleUpdate = async (patient) => {
    try {
      const newName = prompt("Enter new patient name:", patient.name);
      if (!newName) return;

      const patientRef = doc(db, "patients", patient.id);

      await updateDoc(patientRef, {
        name: newName,
      });

      updatePatient({ ...patient, name: newName });
    } catch (err) {
      console.error("Error updating patient:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this patient?"
      );

      if (!confirmDelete) return;

      const patientRef = doc(db, "patients", id);
      await deleteDoc(patientRef);
      deletePatient(id);
    } catch (err) {
      console.error("Error deleting patient:", err);
    }
  };

  if (loading) {
    return (
      <section
        className="dashboard-panel animate-fade-in-up p-6"
        style={{ animationDelay: "300ms" }}
      >
        <p className="text-center text-sm text-slate-300">Loading patients...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section
        className="dashboard-panel animate-fade-in-up p-6"
        style={{ animationDelay: "300ms" }}
      >
        <p className="text-center text-sm text-rose-300">{error}</p>
      </section>
    );
  }

  return (
    <section
      className="dashboard-panel animate-fade-in-up overflow-hidden"
      style={{ animationDelay: "300ms" }}
    >
      <div className="flex flex-col gap-3 border-b border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            Records Table
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Patient Records
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            View, edit, or remove entries from the active register.
          </p>
        </div>

        <span className="inline-flex w-fit rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
          {displayedPatients.length} visible
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-950/70 text-xs uppercase tracking-wider text-slate-400">
            <tr>
              <th className="px-6 py-3 font-medium">Name</th>
              <th className="px-6 py-3 font-medium">Patient ID</th>
              <th className="px-6 py-3 font-medium">Age</th>
              <th className="px-6 py-3 font-medium">Last Visit</th>
              <th className="px-6 py-3 font-medium">Actions</th>
            </tr>
          </thead>

          <tbody>
            {displayedPatients.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-10 text-center text-slate-400">
                  No matching patients found.
                </td>
              </tr>
            ) : (
              displayedPatients.map((patient) => (
                <tr
                  key={patient.id}
                  className="border-t border-white/5 text-slate-200 transition hover:bg-white/[0.03]"
                >
                  <td className="px-6 py-4 font-medium text-white">
                    {patient.name}
                  </td>
                  <td className="px-6 py-4 text-slate-300">{patient.patientId}</td>
                  <td className="px-6 py-4">{patient.age}</td>
                  <td className="px-6 py-4 text-slate-300">
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

                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => handleUpdate(patient)}
                        className="inline-flex rounded-lg border border-emerald-400/40 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-200 transition hover:border-emerald-300/60 hover:bg-emerald-400/20"
                      >
                        Update
                      </button>

                      <button
                        onClick={() => handleDelete(patient.id)}
                        className="inline-flex rounded-lg border border-rose-400/40 bg-rose-400/10 px-3 py-1.5 text-xs font-medium text-rose-200 transition hover:border-rose-300/60 hover:bg-rose-400/20"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PatientList;
