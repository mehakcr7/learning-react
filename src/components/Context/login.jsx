import React from 'react'

function login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
      <form className="space-y-3">
        {/* Email */}
        <div>
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div>
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter your password"
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="w-32 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Loginnnn
          </button>
        </div>

        {/* Forgot Password */}
        <div className="flex justify-center mt-3">
          <a
            href="#"
            className="text-sm text-blue-500 hover:underline"
          >
            Forgot your password?
          </a>
        </div>
      </form>
    </div>
  </div>
  )
}

export default login
