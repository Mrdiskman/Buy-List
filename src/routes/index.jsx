import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";


const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/home" element={<Home/>} />
  </Routes>
  
);
export default RoutesMain;