import Navbar from './components/navbar';
import Fecha from './components/fecha';
import Orders from './components/orders';
import React,{useState, useEffect} from 'react'



function App() {

  return (
    <>
     <Navbar/>
     <Fecha/>
     <Orders/>
    </>
  );
}

export default App;
