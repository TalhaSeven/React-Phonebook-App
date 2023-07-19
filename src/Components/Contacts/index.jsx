import { useState, useEffect } from "react";
import List from "./List/Index";
import Form from "./Form/Index";

const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      fullname: "Mehmet",
      phone_number: "123123",
    },
    {
      fullname: "Ayşe",
      phone_number: "345345",
    },
    {
      fullname: "Ali",
      phone_number: "567567",
    },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>

      <Form addcontact={setContacts} contacts={contacts} />
            <List contacts={contacts} />
    </div>
  );
};

export default Contacts;
