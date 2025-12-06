
import { useState } from 'react';
import Carta from './components/Carta'
import CartaProyecto from './components/CartaProyecto';
import {useEffect} from "react";
import WelcomeMessage from './components/WelcomeMessage';
import Counter from './components/Counter';


function App() {


  return (
     <div>
      <Counter/>
      <WelcomeMessage/>
     </div>

     ) }


     
export default App
