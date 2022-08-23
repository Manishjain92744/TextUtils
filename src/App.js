import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React , { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode , setMode] = useState('light'); // whether dark mode is enabled or not 
  const[alert , setAlert]=useState(null);
  
const showAlert = (message ,type)=>{
  setAlert({
    msg : message,
    type :type
  })
  setTimeout(()=>{
     setAlert(null);
  },2000 )
}
  const toggleMode = ()=> {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode is enabled","sucess");
      console.log("showAlert is running ")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode is enabled","sucess");

    }
  }
  return ( 
    <> 
    <Router>
  <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}  mode={mode}/>
   <div className="container my-3">
          <Routes> 
          <Route  exact path='/about' element={<About />}/>
          <Route  exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below " mode={mode}/>}/>
          </Routes>
          
   </div>
   </Router>
   </>   

  );
}

export default App;
