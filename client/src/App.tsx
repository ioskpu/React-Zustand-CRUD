// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PropietariosPage from './pages/PropietariosPage';
import MarcasPage from './pages/MarcasPage';
import TiposPage from './pages/TiposPage';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Bienvenido al CRUD de Marcas de Vehículos</h1>
        <Routes>
          <Route path="/propietarios/*" element={<PropietariosPage />} />
          <Route path="/marcas/*" element={<MarcasPage />} />
          <Route path="/tipos/*" element={<TiposPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
