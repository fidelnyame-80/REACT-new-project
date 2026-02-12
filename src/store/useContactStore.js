import { create } from "zustand";

export const useContactStore = create((set) => ({
  contacts: [
    {
      id: 1,
      name: "Kay",
      email: "kay@gmail.com",
      course: "Cyber",
    },
    {
      id: 2,
      name: "Jay",
      email: "jay@gmail.com",
      course: "Computer Science",
    },
  ],

  editingContact: null,

  setEditingContact: (contact) =>
    set({ editingContact: contact }),

  clearEditingContact: () =>
    set({ editingContact: null }),

  updateContact: (updatedContact) =>
    set((state) => ({
      contacts: state.contacts.map((c) =>
        c.id === updatedContact.id ? updatedContact : c
      ),
      editingContact: null,
    })),

  deleteContact: (id) =>
    set((state) => ({
      contacts: state.contacts.filter((c) => c.id !== id),
    })),
}));
