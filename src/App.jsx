import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Rodape from './components/Rodape.jsx';
import { Toaster } from "react-hot-toast";
import { UsuarioContext } from './contexts/UsuarioContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./firebase/config";
import './App.css'
import Sobre from './pages/Sobre';


function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUsuarioLogado(user);
      setLoading(false);
    });
  }, []);


  if (loading) {
    return null;
  }

  return (
    <UsuarioContext.Provider value={usuarioLogado} >
      <div className='min-heigth'>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path='/login' element={<Login />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Rodape />
        </BrowserRouter>
        <Toaster position='bottom-right' />
      </div>

    </UsuarioContext.Provider>
  )
}

export default App