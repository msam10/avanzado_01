
import { useState } from 'react';
import Carta from './components/Carta'
import CartaProyecto from './components/CartaProyecto';
import {useEffect} from "react";
import WelcomeMessage from './components/WelcomeMessage';
import Counter from './components/Counter';


function App() {
  const [card,setCard] = useState({
   nombre:"",
   descripcion:"",
   numero:0,
    tipo:"",
    ataque:0,
    defensa:0,
    imagen:"",
  });

  const [errors,setErrors] = useState({
     nombre:"",
   descripcion:"",
   numero:0,
    tipo:"",
    ataque:0,
    defensa:0,
    imagen:"",
});



  return (
     <div>
     <input type="text"
     placeholder="nombre"
     className="border-2 border-indigo-500 outline-0 focus:border-indigo-700 rounder-nd p-2 w-full max-w-nd "
     value={card.nombre}
     onChange={(e) => setCard({...card , nombre: e.target.value})}
     />


     <input type="text"
     placeholder="descripcion"
     className="border-2 border-indigo-500 outline-0 focus:border-indigo-700 rounder-nd p-2 w-full max-w-nd "
     value={card.descripcion}
     onChange={(e) => setCard({...card , descripcion: e.target.value})}
      />
     
     <input type="number"
     placeholder="numero"
     className="border-2 border-indigo-500 outline-0 focus:border-indigo-700 rounder-nd p-2 w-full max-w-nd "
     value={card.numero}
     onChange={(e) => setCard({...card , numero:Number( e.target.value)})}
      /> 

      <input type="text"
     placeholder="tipo"
     className="border-2 border-indigo-500 outline-0 focus:border-indigo-700 rounder-nd p-2 w-full max-w-nd "
     value={card.tipo}
     onChange={(e) => setCard({...card , tipo: e.target.value})}
      /> 

      <input type="number"
     placeholder="defensa"
     className="border-2 border-indigo-500 outline-0 focus:border-indigo-700 rounder-nd p-2 w-full max-w-nd "
     value={card.defensa}
     onChange={(e) => setCard({...card , defensa:Number( e.target.value)})}
      />  
      
      <input type="text"
     placeholder="imagen"
     className="border-2 border-indigo-500 outline-0 focus:border-indigo-700 rounder-nd p-2 w-full max-w-nd "
     value={card.imagen}
     onChange={(e) => setCard({...card , imagen: e.target.value})}
      />
      
      {errors.nombre && <p className="text-red-500"></p>}

      <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        validar
      </button>




    
    
     </div>

     ) }


     
export default App
