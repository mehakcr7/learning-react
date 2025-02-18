import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { supabase } from "./supabaseClient";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      console.error("Error logging in:", error.message);
      alert("Login failed: " + error.message);
      return;
    }

    if (data.user) {
      console.log("Login successful:", data);
      alert(`Welcome back, ${data.user.email}!`);
    } else {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-32 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </div>

          <div className="flex flex-col items-center ">
           
            <p className="mt-2 text-sm text-gray-600">
              New user?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
