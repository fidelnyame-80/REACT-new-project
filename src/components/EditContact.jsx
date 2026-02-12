import { useContactStore } from "../store/useContactStore";
import { useState } from "react";

const EditContact = () => {
  const {
    editingContact,
    updateContact,
    clearEditingContact,
  } = useContactStore();

  const [form, setForm] = useState(() => editingContact);

  if (!editingContact) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
      <div className="bg-purple-700 p-6 rounded-lg w-[350px]">
        <h2 className="text-white text-lg mb-4">
          Edit Student
        </h2>

        <input
          className="w-full mb-3 p-2 rounded"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          className="w-full mb-3 p-2 rounded"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          className="w-full mb-5 p-2 rounded"
          value={form.course}
          onChange={(e) =>
            setForm({ ...form, course: e.target.value })
          }
        />

        <div className="flex gap-3">
          <button
            onClick={() => updateContact(form)}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded"
          >
            Update
          </button>

          <button
            onClick={clearEditingContact}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
