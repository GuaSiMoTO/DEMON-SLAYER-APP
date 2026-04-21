import { Routes, Route } from 'react-router-dom';
import Nabvar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage/HomePage';
import CharacterListPage from './pages/CharacterListPage/CharacterListPage';

import { useEffect } from 'react';

function App() {
  
  return (
    <>
      <Nabvar />

      <Routes>
        <Route path="/Home" element={<HomePage />} />

        <Route path="/characterlist" element={<CharacterListPage />} />

        {/* <Route path="/search" element={<SearchPage />} /> */}

        {/* <Route path="/characterdetail" element={<CharacterDetailPage />} /> */}

      </Routes>
      
    </>
  )
}

export default App;
