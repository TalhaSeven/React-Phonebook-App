import { useState } from "react";
import "./styles.css";

const List = ({ contacts }) => {
  const [filterText, setFilterText] = useState("");
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });
  return (
    <form className="form-control mt-2">
      <input
        className="form-control"
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span>
          </li>
        ))}
      </ul>
      <p>Total Contact ({filtered.length})</p>
    </form>
  );
};

export default List;
