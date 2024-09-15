import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import App from './App.jsx'
import './index.css'
import SignupForm from './Components/SignUp-LogIn/signup.jsx';
import LoginForm from './Components/SignUp-LogIn/login.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path='' element={<App />} >
        <Route path='' element={<Home />} />
      </Route>
      <Route path='/signup' element={<SignupForm />} />
      {/* <Route path='/login' element={<LoginForm/>} /> */}
    </Route>

  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)