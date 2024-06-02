import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState();
  const [carNumber, setCarNumber] = useState();
  const [carType, setCarType] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const validate = () => {
    const errors = [];
    if (username.toLowerCase !== username) {
      return "only lowercase ";
    }

    if (carNumber.length != 8) {
      return "wrong car number";
    }
    if (!carType) {
      return "please insert Car Type";
    }

    let hasCapitalLetter = false;
    let hasSymbol = false;

    const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?";

    for (let i = 0; i < password.length; i++) {
      const char = formData.password[i];
      if (char >= "A" && char <= "Z") hasCapitalLetter = true;
      if (symbols.includes(char)) hasSymbol = true;
    }

    if (!hasCapitalLetter || !hasSymbol) {
      return "Password must include one capital letter and one symbol";
    }

    return "";
  };

  const errorMessage = validate();
  if (errorMessage) {
    setError(errorMessage);
    return;
  }

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleCarNumber = (e) => {
    setCarNumber(e.target.value);
  };
  const handleCarType = (e) => {
    setCarType(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const registerButton = () => {
    navigate("/choose-parking");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-96">
        {/* <h2 className="text-2xl font-bold mb-4">Sign In</h2> */}
        <div>
          <div className="mb-4">
            <input
              onChange={handleUsername}
              placeholder="username"
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
            />
            <input
              onChange={handleCarNumber}
              placeholder="car number"
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
            />
            <input
              onChange={handleCarType}
              placeholder="car type"
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
            />

            <input
              onChange={handlePassword}
              placeholder="password"
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={registerButton}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
