import { useState } from "react";

function Education() {

  const [school, setSchool] = useState("");
  const [study, setStudy] = useState("");
  const [date, setDate] = useState("");
  const [edit, setEdit] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setEdit(false);
  }

  if (edit) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Education</h2>

        <input
          placeholder="School Name"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />

        <input
          placeholder="Title of Study"
          value={study}
          onChange={(e) => setStudy(e.target.value)}
        />

        <input
          placeholder="Date of Study"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    );
  }

  return (
    <div>
      <h2>Education</h2>

      <p>{school}</p>
      <p>{study}</p>
      <p>{date}</p>

      <button onClick={() => setEdit(true)}>Edit</button>
    </div>
  );
}

export default Education;