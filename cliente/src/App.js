import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MarcaList from './components/MarcaList';
import MarcaForm from './components/MarcaForm';
import MarcaDetail from './components/MarcaDetail';

function App() {
  
  return (
    <Router>
      <div className="App">
        <h1>CRUD de Marcas de Vehículos</h1>
        {/* componentes */}
        <Routes>
          <Route path="/marcas" exact component={MarcaList} />
          <Route path="/marcas/nueva" component={MarcaForm} />
          <Route path="/marcas/:id" exact component={MarcaDetail} />
          <Route path="/marcas/:id/editar" component={MarcaForm} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
