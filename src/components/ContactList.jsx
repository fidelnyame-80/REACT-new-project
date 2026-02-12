import { useContactStore } from "../store/useContactStore";

const ContactList = () => {
  const { contacts, deleteContact, setEditingContact } =
    useContactStore();

  return (
    <div className="bg-white p-6 rounded-lg w-[380px] shadow-lg">
      <h2 className="text-center text-black text-xl font-semibold mb-5">
        Student List
      </h2>

      {contacts.map((student) => (
        <div
          key={student.id}
          className="bg-gray-500 text-black p-4 rounded mb-4"
        >
          <p>{student.name}</p>
          <p>{student.email}</p>
          <p>{student.course}</p>

          <div className="flex gap-3 mt-3">
            <button
              onClick={() => setEditingContact(student)}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded text-sm"
            >
              Edit
            </button>

            <button
              onClick={() => deleteContact(student.id)}
              className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded text-sm"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
