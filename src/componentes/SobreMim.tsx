import './SobreMim.css'; // Importa o arquivo de estilos CSS para o componente
import { useState } from "react"; // Importa o hook useState para gerenciar o estado do componente
import eu1 from '../assets/sobreMim1.png'; // Importa a primeira imagem que será exibida
import eu2 from '../assets/sobreMim2.png'; // Importa a segunda imagem que será exibida
import logoGrande from '../assets/logo.png'; // Importa o logo grande que será exibido
import estrelaRosa from '../assets/estrelaRosa.png'; // Importa a imagem de estrela rosa
import curriculo from '../assets/Currículo Ana Carolina Castro Ribeiro.pdf' // Importa o pdf do currículo

const SobreMim = () => {

    // useState cria uma variável de estado para controlar qual imagem exibir
    const [isFirstImage, setIsFirstImage] = useState(true); 

    // Função que alterna a imagem ao clicar
    const handleClick = () => {
        setIsFirstImage(!isFirstImage); // Alterna entre verdadeiro e falso para trocar a imagem
    };

    return (
      <div id='sobreMim' className='sobreMim'> {/* Div principal do componente */}
        <div className="textos"> {/* Contém o título, subtítulo e a descrição */}
          <div className="titulo">
            <h1><span className="diferente">S</span>obre mim</h1> {/* Título com a letra "S" estilizada */}
            <h3>Ana Carolina</h3> {/* Subtítulo com o nome */}
          </div>
          <div className="informacoes">
            <p>Cristã</p> {/* Descrição da ocupação ou identidade */}
            <p>Artista</p> {/* Descrição da ocupação ou identidade */}
            <p>Estudante</p> {/* Descrição da ocupação ou identidade */}
          </div>
          <div className="texto">
            <p>
                Meu nome é Ana Carolina, tenho 17 anos, discípula de Cristo, aspirante a artista desde que me conheço por gente e atualmente curso o último ano do ensino médio.
            </p>
            <p>
                O essencial para saber sobre mim é que diante de rotinas corridas, responsabilidades e idas e vindas, vou querer sempre estar com um lápis na mão, um livro na bolsa e meu devocional em dia.
            </p>
          </div>
          <div className='botao'> {/*div do botão */}
          <a href={curriculo} download> {/* Ao clicar no botão o currículo será abaixado*/} 
            <button className="botaoCurriculo">Baixar Currículo</button> 
          </a>
        </div>
        </div>
        <div className="imagem"> {/* Div contendo a imagem da usuária e o logo */}
            {/* A imagem alterna entre eu1 e eu2 com base no estado */}
            <img
                src={isFirstImage ? eu1 : eu2} // Se isFirstImage for true, exibe 'eu1', senão exibe 'eu2'
                alt="Imagem alternável" // Texto alternativo para a imagem
                onClick={handleClick} // Chama handleClick ao clicar na imagem
                style={{ cursor: "pointer", width: "320px" }} // Estilo da imagem (cursor em forma de ponteiro e largura fixa)
                className='minhaFoto' // Classe CSS da imagem
            />
            <img src={logoGrande} alt="minhaLogo" className='minhaLogo' /> {/* Logo grande exibido */}
            <div className='estrelasRosas'> {/* Contêiner para as imagens das estrelas rosa */}
                {/* Exibe 3 imagens de estrelas rosas */}
                <img src={estrelaRosa} alt="estrela rosa" className='estrelaRosa'/>
                <img src={estrelaRosa} alt="estrela rosa" className='estrelaRosa'/>
                <img src={estrelaRosa} alt="estrela rosa" className='estrelaRosa'/>
            </div>
        </div>
      </div>
    );
};

export default SobreMim; // Exporta o componente para ser usado em outras partes do site