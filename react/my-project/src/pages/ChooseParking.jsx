import React from "react";
import { useNavigate } from "react-router-dom";

export default function ChooseParking() {



    const navigate=useNavigate()

    const StartParkingButton=()=>{
        navigate('/active-parking')
    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex w-full">
       
        <div className="flex flex-col items-center justify-center w-1/2 p-4">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-4">
            Active Parkimg
          </button>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-4">
            Parking
          </button>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-4">
            History
          </button>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-4">
            Exit
          </button>
        </div>
        <div className="flex flex-col items-center justify-center w-1/2 p-4 ">
          <select>
            <option value="">chose city</option>
            <option value="">tlv</option>
            <option value="">rehovot</option>
            <option value="">rishon</option>
          </select>
          <div>car number</div>
          <button 
          onClick={StartParkingButton}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-4">
            Start Parking
          </button>
        </div>
      </div>
    </div>
  );
}
