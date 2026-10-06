import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import React, { useRef } from 'react';


const warzywa = [
  "Marchew",
  "Ziemniak",
  "Pomidor",
  "Ogórek",
  "Papryka",
];

function Pozycja({ nazwa }) {
  return <li>{nazwa}</li>;
}
function App() {
  const nameRef = useRef(null);
  const numberRef = useRef(null);
  return (
    <>
     
 
    </>
  )
}

export default App
