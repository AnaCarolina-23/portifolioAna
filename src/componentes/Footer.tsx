// Importa o arquivo CSS específico para estilizar o Footer
import './Footer.css';

// Cria o componente funcional Footer
const Footer = () => {
  return (
    // Elemento <footer> principal com a classe "footer" para estilização
    <footer className="footer">
      {/* Texto de direitos autorais e autoria */}
      <p>
        Portifólio protegido por direitos autorais • Feito por 
        {/* Nome destacado com fonte personalizada */}
        <div className='nome'>Ana Carolina</div>
      </p>
    </footer>
  );
};

// Exporta o Footer para ser usado em outros lugares do projeto
export default Footer;