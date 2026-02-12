import { useState } from "react";
import { useContactStore } from "../store/useContactStore";

const ContactForm = () => {
  const addContact = useContactStore((state) => state.addContact);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !course) return;

    addContact({ name, email, course });

    setName("");
    setEmail("");
    setCourse("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-lg p-6 w-[350px]"
    >
      <h2 className="text-center text-xl font-semibold text-black mb-6">
        Students Form
      </h2>

      <label className="text-white text-sm">Name:</label>
      <input
        className="w-full mb-3 mt-1 p-2 rounded border"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label className="text-white text-sm">Email:</label>
      <input
        className="w-full mb-3 mt-1 p-2 rounded border"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className="text-white text-sm">Course:</label>
      <input
        className="w-full mb-5 mt-1 p-2 rounded border"
        placeholder="Your course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

     <button
  type="submit"
  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
  onClick={SubmitEvent}
>
  Submit
</button>
    </form>
  );
};

export default ContactForm;
