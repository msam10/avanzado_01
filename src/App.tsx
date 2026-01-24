
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

 const validateCard = (): boolean => {
      let flag = true;
      let nombreError = "";
      let descripcionError = "";
      let ataqueError = "";
      let defensaError = "" ;
      let tipoError = "";
      let imagenError = "";

      if(!card.nombre || card.nombre.length < 3 ) {
        nombreError = "El nombre debe de tener al menos 3 caracteres";
        flag = false;

      }
      if(!card.descripcion) {
      descripcionError = "La descripcion es obligatoria";
      flag = false;

      }
      if(!card.ataque || isNaN(card.ataque) || Number(card.ataque) < 0 ) {
       ataqueError = "El ataque debe ser un numero positivo";
      flag = false;

      }
      if(!card.defensa || isNaN(card.defensa) || Number(card.defensa) < 0 ) {
       defensaError = "El defensa debe ser un numero positivo";
      flag = false;

      }
      if(!card.tipo) {
      tipoError = "El tipo es obligatorio";
      flag = false;
    
      }
      if(!card.imagen) {
      imagenError = "La URL de la imagen es obligatoria";
      flag = false;
    
      }

       setErrors({
        nombre:nombreError,
        descripcion:descripcionError,
        tipo:tipoError,
        ataque:ataqueError,
        defensa:defensaError,
        imagen:imagenError,
      
      });

      return flag;
    };

    const handleSubmit = () => {
    
     if(validateCard()){
      alert("enviando carta...");
     }


    };

    <button
     className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
     onClick={handleSubmit}
    >
      validar
    </button>

   


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
      
      <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        validar
      </button>

      {errors.nombre && <p className="text-red-500"></p>}
      {errors.descripcion && <p className="text-red-500"></p>}
      {errors.numero && <p className="text-red-500"></p>}
      {errors.tipo && <p className="text-red-500"></p>}
      {errors.defensa && <p className="text-red-500"></p>}
      {errors.imagen && <p className="text-red-500"></p>}
      

      


    
    
     </div>
     
    

     ) }


     
export default App
