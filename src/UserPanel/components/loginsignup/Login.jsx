import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { useUser } from "../../context/UserContext";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { setUser } = useUser()
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9090/api/users/login", formData);

      if (response.data.success) {
        setUser(response.data.user);
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 3000,
          onClose: () => navigate("/"),
        });
      } else {
        toast.error("Invalid email or password.", { position: "top-left", autoClose: 3000 });
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Something went wrong. Please try again later.", { position: "top-left", autoClose: 3000 });
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
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
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
                  id="password"
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
                Sign in
              </button>
            </div>
            <ToastContainer/>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Doesn't have an account?{' '}
            <a href="/signup" className="font-semibold text-orange-600 hover:text-orange-500">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
    
  );
}