import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/marcas')
    .then (response => setMarcas(response.data))
    .catch(error => console.error('Error al obtener las marcas', error))
  }, []);

  return (
    <div className="App">
      <h1>CRUD de Marcas de Vehículos</h1>
      {/* componentes */}
      <ul>
        {marcas.map(marca => (
          <li key={marca._id}>
            {marca.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
