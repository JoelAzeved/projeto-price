import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Empresa from './components/pages/Empresa'
import Contato from './components/pages/Contato'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Project from './components/pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container custonClass = 'min-height'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/empresa' element={<Empresa />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/project' element={<Project />} />
        </Routes>
      </Container>

      <Footer />
    </BrowserRouter>

   
  )
}

export default App;
