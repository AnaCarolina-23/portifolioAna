// Importação dos estilos CSS e das imagens usadas no componente
import './Historia.css'; // Importa o arquivo CSS para estilização do componente
import borda from '../assets/bordaAzul1.png'; // Imagem da borda azul
import historia1 from '../assets/historia1.png'; // Imagem do início da história
import historia2 from '../assets/historia2.png'; // Imagem dos primeiros passos
import historia3 from '../assets/historia3.png'; // Imagem do crescimento na arte
import historia4 from '../assets/historia4.png'; // Imagem da criatividade
import historia5 from '../assets/historia5.png'; // Imagem do chamado
import historia6 from '../assets/historia6.png'; // Imagem de "hoje..."
import estrelaVerdeEscuro from '../assets/estrelaVerdeEscuro.png'; // Imagem de estrela verde escura

// Função que define o componente 'Historia'
const Historia = () => {
  return (
    <div id='historia' className="historia"> {/* Container principal da seção */}
      
      {/* A borda azul que envolve o conteúdo */}
      <div className='borda'>
        <img src={borda} alt="borda azul" /> {/* Imagem da borda azul */}
      </div>

      {/* Container que contém o conteúdo da história */}
      <div className='conteudo'>
        
        {/* Seção de textos com a introdução e contexto da história */}
        <div className="textos">
          <p>minha</p>
          <h1><span className="diferente">H</span>istória</h1> {/* Título principal com destaque na letra 'H' */}
          <p>Um pouquinho da minha trajetória na arte :)</p>
          <p>m resumo, sempre amei desenhar, sempre amei estar com a mão suja de tinta, sou apaixonada por criar, seja por qual meio for, e graças a minha família e amigos consegui, desde pequena, crescer e cultivar esse talento.</p>
          {/* Descrição pessoal sobre a jornada artística e a conexão com a fé */}
          <p>Além disso, outro ponto muito importante em minha história é minha vida com Deus, que me salvou e me deu um chamado único nas artes, vivo direcionada pelo propósito de que sou criada para criar, e isso para mim é incrível (Ex 31:2-4).</p>
        </div>

        {/* A linha do tempo que exibe os eventos e marcos importantes da história */}
        <div className='linhaDoTempo'>
          
          {/* Cada evento na linha do tempo é representado por um bloco com imagem e texto */}
          <div className='evento'>
            <img src={historia1} alt="início de tudo" className='fotos' /> {/* Imagem do primeiro evento */}
            <img className="estrela" src={estrelaVerdeEscuro} alt="estrela verde escura" /> {/* Imagem da estrela */}
            <p>O início de tudo, uma menininha, uma latinha de tinta e muitos sonhos</p> {/* Texto explicativo sobre o evento */}
          </div>

          {/* Eventos subsequentes da linha do tempo */}
          <div className='evento'>
            <img src={historia2} alt="primeiros passos" className='fotos'/>
            <img className="estrela" src={estrelaVerdeEscuro} alt="estrela verde escura" />
            <p>Um grupo bem peculiar frequentando os encontros de ilustradores</p>
          </div>
          <div className='evento'>
            <img src={historia3} alt="crescendo" className='fotos'/>
            <img className="estrela" src={estrelaVerdeEscuro} alt="estrela verde escura" />
            <p>Continuando a desenhar, postando meus desenhos e participando de uma competição de ilustração</p>
          </div>
          <div className='evento'>
            <img src={historia4} alt="criatividade" className='fotos'/>
            <img className="estrela" src={estrelaVerdeEscuro} alt="estrela verde escura" />
            <p>Realizando exposições de artes, projetos escolares e muitos rabiscos nesse meio tempo</p>
          </div>
          <div className='evento'>
            <img src={historia5} alt="chamado" className='fotos'/>
            <img className="estrela" src={estrelaVerdeEscuro} alt="estrela verde escura" />
            <p>Liderando, cuidando de pessoas e responsável pelas mídias dos adolescentes com uma amiga</p>
          </div>
          <div className='evento'>
            <img src={historia6} alt="hoje..." className='fotos'/>
            <img className="estrela" src={estrelaVerdeEscuro} alt="estrela verde escura" />
            <p>Desenhando muito menos do que gostaria, mas abraçando projetos maiores e nunca desistindo</p>
          </div>
        </div>

        {/* Seção para exibir estrelas decorativas (posicionadas de forma absoluta) */}
        <div className='estrelasVerdesEscuras'>
          <img src={estrelaVerdeEscuro} alt="estrela verde escura" />
          <img src={estrelaVerdeEscuro} alt="estrela verde escura" />
          <img src={estrelaVerdeEscuro} alt="estrela verde escura" />
          <img src={estrelaVerdeEscuro} alt="estrela verde escura" />
        </div>
      </div>
    </div>
  );
};

// Exportando o componente para ser usado em outras partes da aplicação
export default Historia;