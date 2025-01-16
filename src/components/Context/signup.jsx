import React, { useState } from 'react';
import { supabase } from './supabaseClient';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    dob: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('users') // Replace 'users' with your table name
      .insert([formData]);

    if (error) {
      console.error('Error inserting data:', error.message);
    } else {
      console.log('Data inserted successfully:', data);
      alert('User registered successfully!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="Enter your contact number"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">DOB</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-32 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
