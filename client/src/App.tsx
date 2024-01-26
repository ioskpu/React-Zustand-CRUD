import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PropietariosPage from './pages/PropietariosPage';
import MarcasPage from './pages/MarcasPage';
import TiposPage from './pages/TiposPage';
import PropietarioForm from './components/PropietariosForm';
import MarcaForm from './components/MarcasForm';
import TipoForm from './components/TiposForm';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/propietarios" element={<PropietariosPage />} />
        <Route path="/marcas" element={<MarcasPage />} />
        <Route path="/tipos" element={<TiposPage />} />
        <Route path="/propietarios/nuevo" element={<PropietarioForm />} />
        <Route path="/marcas/nueva" element={<MarcaForm />} />
        <Route path="/tipos/nuevo" element={<TipoForm />} />
        {/* Agrega más rutas según sea necesario */}
        <Route path="/" element={<h1>Bienvenido al CRUD de Marcas de Vehículos</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
