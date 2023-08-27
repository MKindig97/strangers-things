import { useState } from "react";

export default function Register(props) {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username)
  }
  return (
    <div className= "auth-form-container">
    <form className="register-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Full Name</label>
      <input value={name} name="name" id="name" placeholder="Full Name" />
     <label htmlFor="username">Username</label>
     <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="kdog1997" id="username" name= "username" />
     <label htmlFor="password">Password</label>
     <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name= "password" />
     <button type="submit">Log In</button>
    </form>
    <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Log in Here.</button>
    </div>
  )
}