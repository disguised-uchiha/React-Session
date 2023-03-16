import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [error, setError] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserName = e => {
    if (e.target.value.length > 10) {
      setError('First name cannot be longer than 10 characters')
    } else {
      setError('')
    }
    setFirstName(e.target.value
    )
  }

  return (
    <form>
      <input
        value={firstName}
        onChange={handleUserName}
        placeholder="First name"
        type="text"
        name="firstName"
        required
      />
      {error ? <p>{error}</p> : null}
      
      <input
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        placeholder="Last name"
        type="text"
        name="lastName"
        required
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        name="password"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;