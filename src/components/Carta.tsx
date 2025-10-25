type Props = {
    numero: number;
    pinta: string;
     mostrarCarta : (numero:Number, pinta:String) => void;
};





function Carta ({numero,pinta,mostrarCarta}: Props){
    const handleclick = () =>{
        console.log("hola");
        mostrarCarta(numero,pinta);
    };

    return(
    <button onClick={handleclick}>
   <h1>hola soy una carta de numero🃏 {numero + " " + pinta}</h1>
  </button>)

};


export default Carta