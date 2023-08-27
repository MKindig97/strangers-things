import { useState } from "react";
import { Link } from 'react-router-dom'

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username)
  }

  return (
    <div className= "auth-form-container">
      <header> <span class="website-name"> Stranger's Things </span>
      <nav class="Buttons">
      <Link className='linkButton1' to={'/'}>HOME</Link>
      <Link className='linkButton2' to={'/posts'}>POSTS</Link>
      <Link className='linkButton3' to={'/login'}>LOGIN</Link>
      </nav></header>
   <form className="login-form" onSubmit={handleSubmit}>
    <label htmlFor="username">Username</label>
    <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="kdog1997" id="username" name= "username" />
    <label htmlFor="password">Password</label>
    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name= "password" />
    <button type="submit">Log In</button>
   </form>
   <button className="link-btn" onClick={() =>props.onFormSwitch('register')}>Don't have an account? Register Here.</button>
   </div>

  )
}