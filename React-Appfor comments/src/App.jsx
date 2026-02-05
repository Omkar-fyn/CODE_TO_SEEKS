import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Layout from './layout/Layout'
import Register from './pages/Register'
import axios from 'axios'
console.log("APP RENDERED");



function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if(token){
        try {
          const res= await axios.get('/api/users/me',{
            headers:{Authorization:`Bearer ${token}`}
          })
          setUser(res.data)
        } catch (error) {
          setError("Failed to fetch user data");
          localStorage.removeItem("token")
        }
      }
    };
    fetchUser();
  }, []);

  const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout user={user} />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login setUser={setUser} /> },
      { path: "register", element: <Register /> },
    ],
  },
]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
