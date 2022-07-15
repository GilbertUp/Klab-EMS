import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Admin/Index";
import Home from "./HopePages/HomePage";
import LoginComponent from "./Home/LoginComponent";
import Register from "./Home/register";
// import EmsNavBar from "./Admin/Dashboards/EmsNav";
import Add from "./Admin/Add";
import Employee from "./Emproyees/Emproyee";

import Log from "./Admin/logo";
import Todoo from "./Home/Todoo";
import TodoList from "./Emproyees/TodoList";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
 <Route index element={<Home />} />        
    
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Log />} />
        <Route path="/add" element={< Add />} />
        <Route path="/emp" element={< Employee />} />
        <Route path="/todo" element={< TodoList />} />
        {/* <Route path="/todo" element={< Todos />} /> */}
        {/* <Route path="/ems" element={< EmsNavBar />} /> */}

        
       
       
    </Routes>
  </BrowserRouter>
  );
}

export default App;
