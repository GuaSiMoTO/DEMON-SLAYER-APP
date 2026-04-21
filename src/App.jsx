import { Routes, Route } from 'react-router-dom';
import Nabvar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage/HomePage';


import { useEffect } from 'react';

function App() {
  
  return (
    <>
      <Nabvar />

      <Routes>
        <Route path="/Home" element={<HomePage />} />

      </Routes>
      
    </>
  )
}

export default App;
