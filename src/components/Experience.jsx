import { useState } from "react";

function Experience() {

  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [edit, setEdit] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setEdit(false);
  }

  if (edit) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Experience</h2>

        <input
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <input
          placeholder="Position Title"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />

        <input
          placeholder="Main Responsibilities"
          value={responsibilities}
          onChange={(e) => setResponsibilities(e.target.value)}
        />

        <input
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />

        <input
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    );
  }

  return (
    <div>
      <h2>Experience</h2>

      <p>{company}</p>
      <p>{position}</p>
      <p>{responsibilities}</p>
      <p>{from} - {to}</p>

      <button onClick={() => setEdit(true)}>Edit</button>
    </div>
  );
}

export default Experience;