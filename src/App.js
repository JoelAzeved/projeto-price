import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Empresa from './components/pages/Empresa'
import Contato from './components/pages/Contato'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Project from './components/pages/Projects';
import ProjectsAdicionados from './components/pages/Projects.Adicionados';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container custonClass = 'min-height'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/empresa' element={<Empresa />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/projetos' element={<Project />} />
          <Route path='/projetosadicionados' element={<ProjectsAdicionados/>} />
        </Routes>
      </Container>

      <Footer />
    </BrowserRouter>

   
  )
}

export default App;
