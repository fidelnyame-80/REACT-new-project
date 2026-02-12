import { useState } from "react";
import { useContactStore } from "../store/useContactStore";
import "./Contacts.css";

const Contacts = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const contacts = useContactStore((state) => state.contacts);
  const addContact = useContactStore((state) => state.addContact);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    addContact({
      id: Date.now(),
      name,
      phone,
    });

    setName("");
    setPhone("");
  };

  return (
    <div className="contacts-container">
      <h2>Contacts</h2>

      <form className="contacts-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Contact name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button type="submit">Add Contact</button>
      </form>

      <ul className="contacts-list">
        {contacts.map((contact) => (
          <li key={contact.id}>
            <strong>{contact.name}</strong> — {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
