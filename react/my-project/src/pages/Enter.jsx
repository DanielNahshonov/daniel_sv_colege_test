import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Enter({usersList}) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const signIn = () => {
    if()
    
    navigate("/choose-parking");
  };
  const signUp=()=>{
    navigate('/signup')
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-96">
        {/* <h2 className="text-2xl font-bold mb-4">Sign In</h2> */}
        <div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              username
            </label>
            <input
              onChange={handleUsername}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              onChange={handlePassword}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            onClick={signIn}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
          <button 
          onClick={signUp}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
