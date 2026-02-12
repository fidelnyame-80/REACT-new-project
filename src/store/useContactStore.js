import { create } from "zustand";

export const useContactStore = create((set) => ({
  contacts: [],

  addContact: (contact) =>
    set((state) => ({
      contacts: [...state.contacts, contact],
    })),
}));
