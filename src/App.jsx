import { Routes, Route } from 'react-router-dom';
import Nabvar from './components/Navbar/Navbar'; // Mantengo tu nombre 'Nabvar'
import HomePage from './pages/HomePage/HomePage';
import CharacterListPage from './pages/CharacterListPage/CharacterListPage';
import CharacterDetailPage from './pages/CharacterDetailPage/CharacterDetailPage';
import ChatBotPage from './pages/ChatBotPage/ChatBotPage';

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
        <Route path="/chatbot" element={<ChatBotPage />} />
       
        <Route path="/characterdetail/:name" element={<CharacterDetailPage />} />
      </Routes>
    </CharacterProvider>
  );
}

export default App;