import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import Enter from "./pages/Enter";
import SignUp from "./pages/SignUp";
import ChooseParking from "./pages/ChooseParking";
import ActiveParking from "./pages/ActiveParking";

function App() {
  const [usersList, setUsersList] = useState([
    { username: "daniel", password: 12345 },
  ]);

  const cite = [
    { name: "tlv", cost: 150 },
    { name: "netania", cost: 100 },
    { name: "rehovot", cost: 50 },
  ];

  // const CheckUserInList=(username,password)=>{
  //   const userExist=userList.some((users)=>users.username==username)
  //   if(!userExist){
  //     console.log('no user')
  //   }else

  // }

  return (
    <Routes>
      <Route path="/" element={<Enter usersList={usersList} />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/choose-parking" element={<ChooseParking cite={cite}/>} />
      <Route path="/active-parking" element={<ActiveParking />} />
    </Routes>
  );
}

export default App;
