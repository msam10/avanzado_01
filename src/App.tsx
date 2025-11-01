
import './App.css'
import Carta from './components/Carta'
import CartaProyecto from './components/CartaProyecto';

function App() {
  const mostrarCarta = (numero:Number, pinta:String) => {
    alert(`carta de numero: ${numero} y de pinta ${pinta}`);
  }

  return (
    <div>
      <h1>mi primer proyecto en react </h1>
      <p>por: samantha Mendez</p>
      <p>aguante one piece</p>
      <Carta numero={2} pinta="♠" mostrarCarta={mostrarCarta}/>
      <Carta numero={4} pinta="❤" mostrarCarta={mostrarCarta}/>
      <Carta numero={8}pinta="♦" mostrarCarta={mostrarCarta}/>
      <Carta numero={10} pinta="♣"mostrarCarta={mostrarCarta}/>
      <Carta numero={14} pinta="♦"mostrarCarta={mostrarCarta}/>
      
      <CartaProyecto
       ataque={1000}
       nombre="Luffy"
       defensa={90}
       descripcion="Luffy,usuario de la fruta del diablo; hito hito no mi, modelo:NIKA"
       imagen="https://i.redd.it/lhdd2872qurb1.jpg"
       numero={1}
       tipo="Logia"
       
       />
    </div>
     ) }
export default App
