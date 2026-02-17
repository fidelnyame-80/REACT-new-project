import { create } from "zustand";

const usePatientStore = create((set) => ({
  patients: [],
  loading: false,
  error: null,

  searchQuery: "",
  ageFilter: "",
  idFilter: "",
  lastVisitFilter: "",
  filtersApplied: false,

  setSearchQuery: (query) => set({ searchQuery: query }),
  setAgeFilter: (age) => set({ ageFilter: age }),
  setIdFilter: (id) => set({ idFilter: id }),
  setLastVisitFilter: (days) => set({ lastVisitFilter: days }),
  setFiltersApplied: (filtersApplied) => set({ filtersApplied }),
  resetFilters: () =>
    set({
      searchQuery: "",
      ageFilter: "",
      idFilter: "",
      lastVisitFilter: "",
      filtersApplied: false,
    }),

  setPatients: (patients) => set({ patients }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),

  updatePatient: (updatedPatient) =>
    set((state) => ({
      patients: state.patients.map((patient) =>
        patient.id === updatedPatient.id ? updatedPatient : patient
      ),
    })),

  deletePatient: (id) =>
    set((state) => ({
      patients: state.patients.filter((patient) => patient.id !== id),
    })),
}));

export default usePatientStore;
