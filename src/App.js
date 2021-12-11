import { useState } from "react";

import "./App.css";
import AddTask from "./components/AddTask/AddTask";

import MyHeader from "./components/Header/Button";
function App(props) {
  
  
  return (
    <div className='App'>
      <h1>TASK TRACKER APP</h1>

      <MyHeader  />
   <AddTask />
    </div>
  );
}

export default App;
