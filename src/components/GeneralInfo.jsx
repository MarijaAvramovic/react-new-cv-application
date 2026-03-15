import { useState } from "react"

function GeneralInfo() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const [edit, setEdit] = useState(true)

  function handleSubmit(e){
  e.preventDefault()
  setEdit(false)
}

if (edit) {

  return (
    <form  onSubmit={handleSubmit}>

      <h2>General Information</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button type="submit">Submit</button>

    </form>
  )
}

return (
  <div>

    <h2>General Info</h2>

    <p>{name}</p>
    <p>{email}</p>
    <p>{phone}</p>

    <button onClick={() => setEdit(true)}>Edit</button>

  </div>
)
 
}

export default GeneralInfo