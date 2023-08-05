import {Route,Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Detais from "./components/detais/Detais";
import Login from "./components/Login/Login";
import Admin from "./components/admin/Admin";
import AdminUser from "./components/admin/AdminUser";

function App() {
  return (
    <div>
   
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/Canal/:id" element={<Detais />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/admin/Users" element={<AdminUser />} />
          <Route exact path="/admin/Canales" element={<AdminUser />} />
          <Route exact path="/admin/Perfil" element={<AdminUser />} />
        </Routes>
 
    </div>
  );
}

export default App;