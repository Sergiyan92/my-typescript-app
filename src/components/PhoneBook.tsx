import { nanoid } from "nanoid";
import { useState } from "react";

interface newContactProps {
  id: string;
  name: string;
  number: string;
}

const PhoneBook = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const addContact = (newContact: newContactProps) => {
    setContacts([...contacts, newContact]);
  };
  const deleteContact = (id: string) => {
    return setContacts(contacts.filter((contact) => contact.id !== id));
  };
  const handleSubmit = (event: { preventDefault: () => void }) => {
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
    <div className="container ml-auto mr-auto mt-10 mb-10">
      <h2 className=" text-center text-2xl font-bold mb-4">Phonebook</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col   items-center mb-5"
      >
        <label className="mb-2">Name</label>
        <input
          className="border w-[500px] p-2 mb-2 rounded"
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="mb-2">Number</label>
        <input
          className="border w-[500px] p-2 mb-2 rounded"
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
        <button
          className="p-2 border-none bg-purple-700 text-white rounded cursor-pointer"
          type="submit"
        >
          Add Contact
        </button>
        <label className="mb-2 mt-4">Find contacts by name</label>
        <input
          className="border w-[500px] p-2 mb-2 rounded"
          type="text"
          name="filter"
          placeholder="Search"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </form>

      <ul className="space-y-4">
        {filteredContacts.map((contact) => (
          <li key={contact.id} className="flex items-center justify-between">
            <p className="text-lg">
              {contact.name} - {contact.number}
            </p>
            <button
              className="px-4 py-2 bg-red-700 text-white rounded cursor-pointer"
              onClick={() => deleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhoneBook;
