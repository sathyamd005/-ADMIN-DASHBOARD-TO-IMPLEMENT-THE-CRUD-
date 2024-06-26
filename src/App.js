import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar.js';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./css/sb-admin-2.css"
import "./css/fontawesome-free/css/all.min.css"
import Topbar from './Topbar.js';
import Dashboard from './Dashboard.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './user.js';
import Createuser from './createuser.js';
import Viewuser from './Viewuser.js';
import Edituser from './Edituser.js';
import { useContext } from 'react';
import { UserContext } from './UserContext.js';
import Login from './Login.js';
import PortalLayout from './PortalLayout.js';
function App() {
const UserData=useContext(UserContext);
  return (
  <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/portal' element={<PortalLayout/>}>
      <Route path='Dashboard' element={<Dashboard/>}></Route>
        <Route path='user' element={<User/>}></Route>
        <Route path='Create_User' element={<Createuser/>}></Route>
        <Route path='user/:id' element={<Viewuser/>}></Route>
        <Route path='Edituser/:id' element={<Edituser/>}></Route> 
      </Route>
</Routes>
  </BrowserRouter>
  )
  }
  export default App;
