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
    <div>
      <h3>
        {nombre} (#{numero})
      </h3>
      <img src={imagen} alt={nombre} /> 
      <p>tipo:{tipo}</p>
      <p>ataque{ataque}</p>
      <p>defensa:{defensa}</p>
       <p>descripcion:{descripcion}</p>
       <p>tripulacion:{tripulacion}</p>
      
    </div>
)
}

export default CartaProyecto;
