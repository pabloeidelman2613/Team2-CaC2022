import './App.css';
import Rutas from './Routes/Rutas';
import Navbar from './Components/NavBar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Rutas>
          {/* El programa inicia en Rutas que administra los enlaces.
              Navbar pasa como componente a todos los elementos 
          */}
          <Navbar></Navbar>
          {/* Luego aparecen las paginas por debajo. */}
        </Rutas>
    </div>
  );
}

export default App;
