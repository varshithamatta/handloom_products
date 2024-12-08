import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HandshakeIcon from '@mui/icons-material/Handshake'
// import { GoogleLogin } from '@react-oauth/google';
export default function Signup() {

  const [formData,setFormData] = useState({
    name:"",
    email:"",
    password:"",
  });
   const navigate = useNavigate();
  



  const handleChange = (e) => {
    // const { name, value } = e.target; // Extract 'name' and 'value' from the input that triggered the event
    setFormData({ ...formData, [e.target.name]: e.target.value }); // Update the corresponding key in formData with the new value
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await axios.post("http://localhost:9090/api/users/register", formData);
      console.log(response.data);
      navigate(`/login`);
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };


  return (
    
    <>
   <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="flex justify-center">
            <HandshakeIcon style={{ height: '50px', width: '50px' }} className="mx-auto text-orange-500" />
            </div>
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Create an Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
          <div>
              <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

              >
                Sign Up
              </button>
            </div>
            
          </form>


          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already have an account?{' '}
            <a href="/login" className="font-semibold text-orange-600 hover:text-orange-500">
              Login
            </a>
          </p>
        </div>
      </div>
    </>
 
    
  );
}
  
    {/* <div>
    <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
    </div> */}