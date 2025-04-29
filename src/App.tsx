// Importa o CSS principal da aplicação
import './App.css';
// Importa todos os componentes que formam o site
import Navegador from './componentes/Navegador';
import Header from './componentes/Header';
import SobreMim from './componentes/SobreMim';
import Historia from './componentes/Historia';
import Experiencias from './componentes/Experiencias';
import Destaques from './componentes/Destaques';
import Trabalho from './componentes/Trabalho';
import Footer from './componentes/Footer';

function App() {
  return (
    <>
      {/* Componente de navegação (menu superior) */}
      <Navegador />
      {/* Seções do site */}
      <Header />
      <SobreMim />
      <Historia />
      <Experiencias />
      <Destaques />
      <Trabalho />
      {/* Rodapé da página */}
      <Footer />
    </>
  );
}

export default App;
