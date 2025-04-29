import './Trabalho.css'; // Importa o arquivo de estilos CSS para o componente
import estrealaBege from '../assets/estrelaBege.png'; // Importa a imagem de estrela bege
import logo from '../assets/logo.png'; // Importa o logo do site

const Trabalho = () => {
    return (
        <div id='trabalho' className="trabalho"> {/* Div principal que contém todo o conteúdo do componente */}
            <div className='cabecalho'> {/* Contêiner para o cabeçalho do componente */}
                <div className="textos"> {/* Contém os textos no cabeçalho */}
                    <p>Meu</p> {/* Texto "Meu" */}
                    <h1><span className="diferente">T</span>rabalho</h1> {/* Título com a letra "T" estilizada */}
                </div>
                <div className='logo'> {/* Div para exibir o logo do site */}
                    <img src={logo} alt="logo do site" /> {/* Exibe o logo do site */}
                </div>
            </div>
            <div className='conteudo'> {/* Contêiner para listar as formas de trabalho */}
                <p>Aquarela</p> {/* Nome das técnicas de arte */}
                <p>Guache</p>
                <p>Lápis de Cor</p>
                <p>Sketch</p>
                <p>Giz Pastel</p>
                <p>Pintura de Rosto</p>
                <p>Artesanato</p>
                <p>Arte Digital</p>
                <p>Grafite</p>
                <p>Colagem</p>
                <p>Design</p>
                <p>Mais...</p> {/* Indica que há mais técnicas, possivelmente em outras partes do site */}
            </div>
            <div className='mais'> {/* Mensagem para incentivar o visitante a saber mais */}
                <p>Ficou interessado? Para saber mais do meu trabalho basta me seguir nas redes sociais</p>
            </div>
            <div className='contatos'> {/* Contêiner para informações de contato */}
                <div>
                    <p>Email anacarolina.cr2008@gmail.com</p> {/* Endereço de email */}
                    <p>Sorocaba, SP- Brasil</p> {/* Localização */}
                    <p>Instagram ana_carolbananinha</p> {/* Nome do usuário no Instagram */}
                </div>
                <div>
                    <p>Entre</p> {/* Títulos para incentivar o contato */}
                    <p>Em</p>
                    <p>Contato</p>
                </div>
            </div>
            <div className='estrelasBeges'> {/* Contêiner para exibir as estrelas bege */}
                <img src={estrealaBege} alt="estrela bege" /> {/* Exibe a primeira estrela bege */}
                <img src={estrealaBege} alt="estrela bege" /> {/* Exibe a segunda estrela bege */}
            </div>
        </div>
    );
};

export default Trabalho; // Exporta o componente para ser utilizado em outras partes do site