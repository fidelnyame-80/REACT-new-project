import { create } from "zustand"; // Import Zustand's create function

// Create a global state store using Zustand
const usePatientStore = create((set) => ({
  patients: [], // Stores all patient records
  loading: false, // Tracks loading state
  error: null, // Stores error messages

    // Search query state
    searchQuery: "",

    // Function to update search input
    setSearchQuery: (query) => set({ searchQuery: query }),
           
    // Search + Filter States
     searchQuery: "",
    ageFilter: "",
    idFilter: "",
    lastVisitFilter: "", // days (e.g., 7, 30)
    filteredPatients: [],

     // Setters
    setSearchQuery: (query) => set({ searchQuery: query }),
    setAgeFilter: (age) => set({ ageFilter: age }),
    setIdFilter: (id) => set({ idFilter: id }),
    setLastVisitFilter: (days) => set({ lastVisitFilter: days }),
    setFilteredPatients: (patients) => set({ filteredPatients: patients }),

  // Function to replace entire patient list in state
  setPatients: (patients) => set({ patients }),

  // Function to update loading state
  setLoading: (loading) => set({ loading }),

  // Function to update error state
  setError: (error) => set({ error }),

  // 🔥 UPDATE FUNCTION (local state only after Firestore update succeeds)
  updatePatient: (updatedPatient) =>
    set((state) => ({
      // Map through patients
      patients: state.patients.map((patient) =>
        // If IDs match, replace with updated version
        patient.id === updatedPatient.id
          ? updatedPatient
          : patient // Otherwise keep original
      ),
    })),

  // 🔥 DELETE FUNCTION (local state only after Firestore delete succeeds)
  deletePatient: (id) =>
    set((state) => ({
      // Filter out the patient with matching ID
      patients: state.patients.filter((patient) => patient.id !== id),
    })),
}));

export default usePatientStore;
