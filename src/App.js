import React from 'react';
import {BrowserRouter, Route ,Switch }  from 'react-router-dom';
import Login from './component/login/login';
import Signup from './component/Signup/Signup';
import Forgot from './component/forgot/forgot';
import './App.css';


function App() {
  return (
    <div>
      
    
      <BrowserRouter>

      <Switch>

              <Route path="/login">
                <Login/>
            </Route>

             <Route path="/signup">
                <Signup/>
            </Route>
            <Route path="/forgot">
                <Forgot/>
            </Route>
       </Switch>
      
      </BrowserRouter>
      

      
      </div> 
    
  );
}

export default App;
