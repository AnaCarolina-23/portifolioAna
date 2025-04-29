// Importa o arquivo de estilo e a imagem da estrela
import './Header.css';
import estrelaBege from '../assets/estrelaBege.png'

// Componente funcional Header
const Header = () => {
  return (
    <div>
        {/* Div principal para a seção de Header */}
        <div id='inicio' className="header">
            {/* Bloco de textos no cabeçalho */}
            <div className="textos">
                {/* Título principal, com a letra P estilizada */}
                <h1><span className="diferente">P</span>ortifólio</h1>
                {/* Meu Nome */}
                <h3>Ana Carolina</h3>
            </div>
            {/* Bloco de imagens das estrelas */}
            <div className="estrelas">
                {/* Imagens das estrelas com a mesma imagem (estrelaBege) */}
                <img src={estrelaBege} alt="estrela" />
                <img src={estrelaBege} alt="estrela" />
            </div>
        </div>
    </div>
  );
};

// Exporta o componente Header para ser usado em outros arquivos
export default Header;
