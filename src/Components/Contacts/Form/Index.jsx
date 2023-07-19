import { useState, useEffect } from "react";
const initialFormValue = { fullname: "", phone_number: "" };

function Form({ addcontact, contacts }) {
  const [form, setForm] = useState(initialFormValue);
  useEffect(() => {
    setForm(initialFormValue);
  }, [contacts]);
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }
    addcontact([...contacts, form]);
  };

  return (
    <form className="form-control " onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          className="form-control mt-2"
          placeholder="Full Name"
          onChange={onChangeInput}
          value={form.fullname}
        />
      </div>
      <div>
        <input
          className="form-control mt-2"
          name="phone_number"
          placeholder="Phone Number"
          onChange={onChangeInput}
          value={form.phone_number}
        />
      </div>
      <div className="d-flex align-items-center justify-content-center">
      <button className="btn btn-success mt-2 mb-2">Add Contact</button>
    </div>
    </form>
  );
}

export default Form;
