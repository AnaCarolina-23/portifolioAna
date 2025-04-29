// Importação do React e hooks necessários, além do arquivo de estilos e logo
import { useEffect, useState } from 'react'; // useState e useEffect são hooks do React
import './Navegador.css'; // Importa o arquivo de estilos CSS para o componente
import logo from '../assets/LogoSimples.png'; // Importa a imagem do logo

// Componente Navegador
const Navegador = () => {
  // Hook para controlar o estado de rolagem da página
  const [scrolled, setScrolled] = useState(false); 

  // useEffect é usado para configurar o evento de scroll
  useEffect(() => {
    // Função para alterar o estado de "scrolled" com base no deslocamento da página
    const handleScroll = () => {
      setScrolled(window.scrollY > 0); // Se a rolagem for maior que 0, "scrolled" será verdadeiro
    };

    // Adiciona o evento de scroll na janela
    window.addEventListener('scroll', handleScroll);

    // Cleanup: remove o evento de scroll quando o componente for desmontado
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // O array vazio [] faz com que o efeito só seja executado uma vez, quando o componente for montado

  return (
    <nav className={scrolled ? 'navbar scrolled' : 'navbar'}> {/* A classe "scrolled" é adicionada quando o usuário rola a página */}
      <div className="navbarContent">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo" /> {/* Exibe o logo da aplicação */}
        </div>

        {/* Lista de links de navegação */}
        <ul className="navLinks">
          <li><a href="#inicio">Início</a></li> {/* Link para a seção Início */}
          <li><a href="#sobreMim">Sobre mim</a></li> {/* Link para a seção Sobre mim */}
          <li><a href="#historia">História</a></li> {/* Link para a seção História */}
          <li><a href="#experiencias">Experiências</a></li> {/* Link para a seção Experiências */}
          <li><a href="#destaques">Destaques</a></li> {/* Link para a seção Destaques */}
          <li><a href="#trabalho">Trabalho</a></li> {/* Link para a seção Trabalho */}
        </ul>
      </div>
    </nav>
  );
}

export default Navegador; // Exporta o componente para ser usado em outras partes do aplicativo