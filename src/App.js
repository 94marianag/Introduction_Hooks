import React from 'react';
import {GlobalContextProvider} from "./components/GlobalContextProvider";
import {Login} from "./components/Login";
import './App.css';


function App() {
  return <>
    <div></div>
      <GlobalContextProvider settings={{username:"Mariana", password:"hola" }}> 
        <Login/>
      </GlobalContextProvider>   
  </>
};

export default App;
