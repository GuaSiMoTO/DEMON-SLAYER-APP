import { Routes, Route } from 'react-router-dom';
import Nabvar from './components/Navbar/Navbar'; // Mantengo tu nombre 'Nabvar'
import HomePage from './pages/HomePage/HomePage';
import CharacterListPage from './pages/CharacterListPage/CharacterListPage';
import CharacterDetailPage from './pages/CharacterDetailPage/CharacterDetailPage';

// 1. Importamos el Provider que creamos
import { CharacterProvider } from './context/CharacterContext'; 

function App() {
  return (
    /* Envolvemos TODO lo que necesite acceder a los personajes */
    <CharacterProvider>
      <Nabvar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characterlist" element={<CharacterListPage />} />
        
        {/* Cuando habilites estas rutas, ya tendrán acceso al contexto 
           automáticamente gracias al Provider de arriba.
        */}
        {/* <Route path="/search" element={<SearchPage />} /> */}
        <Route path="/characterdetail/:name" element={<CharacterDetailPage />} />
      </Routes>
    </CharacterProvider>
  );
}

export default App;