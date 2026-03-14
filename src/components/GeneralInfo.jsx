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

  return (
    <form>

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

export default GeneralInfo