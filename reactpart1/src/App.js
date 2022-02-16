import './App.css';
import Mensaje from './Mensaje'

const App = () => {
  const mensaje = "Hola mundo desde la variable.";
  return(
    <div className="App">
      <Mensaje color="yellow" mensaje="Estamos trabajando"/>
      <Mensaje color='red' mensaje="En un curso"/>
      <Mensaje color='blue' mensaje="De React"/>
    </div>
  )
}

export default App;
