import React,{useState} from "react";
import './App.css';
import Signup from "./Signup";
import Login from "./Login";



function App() {
  const [state, setState] = useState(false);
  return (
    <div>
      <div className="buttons">
        <button
        onClick={
          function name(params){
          setState(true);
        }}
        >Login</button>
        <button onClick={
          function name(params){
          setState(false)
        }}
        >Signup</button>
        
      </div>
      {state?  <Login/> : <Signup/>}
    </div>
    
  );
}

export default App;
