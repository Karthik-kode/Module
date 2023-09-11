import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';

import Login from './Components/Login';
import Dashboard from './Components/Dashboard';


import { BrowserRouter , Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/Signup' element={<Signup />}/>
              <Route path='/dashboard' element={<Dashboard />}/>
          </Routes>
        
        </BrowserRouter>
        {/* <Calendar /> */}
        {/* < Login /> */}
    </div>
  );
}

export default App;
