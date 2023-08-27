import {Routes, Route} from 'react-router-dom'
import AllPosts from "./pages/AllPosts";
import SinglePost from './pages/SinglePost';
import Login from './pages/Login';
import Register from './pages/Register';
import "./App.css";
import { useState } from 'react';


function App() {
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (forName) => {
    setCurrentForm(forName);
  }

  return (
    <div>
      <Routes>
        <Route path="/login" element={currentForm === "login"? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />} /> 
        <Route path='/posts' element={<AllPosts />} />
        <Route path='/posts/:id' element={<SinglePost />} />
      </Routes>
    </div>
  )
}

export default App;
