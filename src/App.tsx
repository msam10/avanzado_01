
import './App.css'
import Carta from './components/Carta'
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
      
    </div>
     ) }
export default App
