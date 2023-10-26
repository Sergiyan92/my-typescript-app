import { nanoid } from "nanoid";
import { useState } from "react";

const PhoneBook = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };
  const deleteContact = (id: string) => {
    return setContacts(contacts.filter((contact) => contact.id !== id));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const existingContact = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (existingContact) {
      alert(`${name} is already in the phonebook.`);
    } else {
      if (name.trim() !== "" && number.trim() !== "") {
        const newContact = {
          id: nanoid(),
          name: name.trim(),
          number: number.trim(),
        };
        addContact(newContact);
        setName("");
        setNumber("");
      }
    }
  };

  return (
    <div className="container ml-auto mr-auto">
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          className="border"
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Number</label>
        <input
          className="border"
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
        <button type="submit">Add Contact</button>
      </form>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.number}
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhoneBook;
