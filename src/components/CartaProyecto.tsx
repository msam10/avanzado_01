type Props = {
    numero:number;
    nombre:string;
    tipo:string;
    ataque:number;
    defensa:number;
    descripcion:string;
    imagen:string;
    tripulacion?:string;

};

function CartaProyecto ({
numero,
ataque,
nombre,
tipo,
defensa,
descripcion,
imagen,
tripulacion="desconocido/no tiene"
}:Props){ 
return (
    <div className="flex flex-col items-center bg-red-700 border-4 rounded-lg w-90">
      <h3>
        {nombre} (#{numero})
      </h3>
      <img className="w-80 h-80" src={imagen} alt={nombre} /> 
      <p>tipo:{tipo}</p>
      <p>ataque{ataque}</p>
      <p>defensa:{defensa}</p>
       <p>descripcion:{descripcion}</p>
       <p>tripulacion:{tripulacion}</p>
      
    </div>
)
}

export default CartaProyecto;
