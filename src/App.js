import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import NavbBar from './components/NavBar';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import 'react-toastify/dist/ReactToastify.css';
const App=()=> {
  return (
    <div className="App">
      
      <NavbBar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
       
        <Route  path='/create' element={<AddContact/>}/>
       
        <Route  path='/edit/:id' element={<EditContact/>} />
      
      </Routes>
      <ToastContainer/>
      
    </div>
  );
}

export default App;
