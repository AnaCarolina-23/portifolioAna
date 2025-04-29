// Importa o React e o hook useState para controle de estado
import { useState } from "react";

// Importa o arquivo de estilos específico para o componente
import "./Experiencias.css";

// Importa as imagens usadas como fundo para cada experiência
import experiencia1 from '../assets/experiencias1.png';
import experiencia2 from '../assets/experiencias2.png';
import experiencia3 from '../assets/experiencias3.png';
import experiencia4 from '../assets/experiencias4.png';
import experiencia5 from '../assets/experiencias5.png';
import experiencia6 from '../assets/experiencias6.png';
import experiencia7 from '../assets/experiencias7.png';
import experiencia8 from '../assets/experiencias8.png';
import experiencia9 from '../assets/experiencias9.png';
import experiencia10 from '../assets/experiencias10.png';

// Importa a imagem de estrela rosa que será usada decorativamente
import estrelaRosa from '../assets/estrelaRosa.png';

// Define a interface que descreve a estrutura de cada página do carrossel
interface PaginaCarrossel {
  backgroundImage: string; // Caminho da imagem de fundo
  title: string;           // Título da experiência (não é usado diretamente no render atualmente)
  text: string;            // Texto descritivo da experiência
}

// Lista de páginas do carrossel, cada uma contendo imagem de fundo, título e descrição
const pages: PaginaCarrossel[] = [
  // Cada objeto representa uma experiência diferente, com sua respectiva imagem e texto
  {
    backgroundImage: `${experiencia1}`,
    title: "Experiências",
    text: `Como disse, desde que me conheço por gente eu gosto de desenhar. A minha memória mais antiga sobre minha escolha de seguir na arte é essa:
Eu, uma menininha de 7 anos, chegando para a minha vó e falando: “Vovó!! Quero ser uma grafiteira!”.
Depois desse evento algo surpreendente me aconteceu. Por algum tipo de erro, o catálogo de eventos do Sesc falava na sessão de Avós e Netos de um curso de grafite com o Will Ferreira e Michel Japs e, é claro, lá fui eu com minha vó fazer essa fantástica oficina, por sorte não barraram uma netinha animada com sua vó.
Esse foi o marco inicial da minha trajetória, sou muito grata pela minha família que me proporcionou essa experiência e pelos grafiteiros que me incentivaram, eles foram minha maior inspiração na época, isso tudo me trouxe a paixão e o ânimo que tenho hoje.
Mesmo depois de todos esses anos, a mão toda suja de tinta e a língua pra fora da boca concentrada em uma criação continuam sendo as mesmas que de 10 anos atrás.`,
  },
  {
    backgroundImage: `${experiencia2}`,
    title: "Experiências",
    text: `Outro compilado de experiências que moldaram minha trajetória na arte foram os Encontro Ilustra, encontros no Sesc Sorocaba toda última quinta do mês com um ilustrador palestrante diferente toda vez.
Nesses momentos, sempre acompanhada da minha família, eu me sentava e, com as perninhas balançando sem alcançar o chão, eu desenhava e desenhava por horas ouvindo outros que trilharam esse caminho na arte antes de mim.
Essas experiências me ajudaram a crescer como artista tanto em técnica, quanto em conhecimento e direcionamento porque, veja bem, gente querendo me ajudar nunca me faltou, graças a Deus.
Nomes muito importantes na minha trajetória foram a Lia Fenix, Will e Japs, Adriano Gianolla, Marcel Bartholo e minha família (Ps: Obrigada). `,
  },
  {
    backgroundImage: `${experiencia3}`,
    title: "Experiências",
    text: `Em 2020 eu lia bastante, sempre gostei de ler, mas um belo dia descobri que a J. K. Rowling, (isso mesmo, a escritora de Harry Potter), tinha escrito um novo livro de fantasia e a edição do Brasil contaria com a presença de 34 desenhos ilustrados por crianças.
Para a seleção dos desenhos foi aberto um concurso, concurso esse que minha mãe me avisou e eu de início deixei de lado, até chegar nos últimos 3 dias do prazo final.
Pensa na loucura de ler os capítulos postados às pressas e fazer qualquer desenho que fosse para participar daquele concurso. Não consegui ler todo o livro, mas enviei 5 desenhos a tempo.
Me lembro de, antes de abrir o resultado eu ter orado assim: “Deus, se eu ganhar você é Deus, bom e perfeito, mas se eu não ganhar você vai continuar sendo Deus, bom, perfeito e maravilhoso, que seja feita a tua vontade”.
Eu não imaginava abrir aquela lista e ver de verdade meu nome lá. Naquele dia acordei todo mundo que estava em casa dando pulos e não acreditando. `,
  },
  {
    backgroundImage: `${experiencia4}`,
    title: "Experiências",
    text: `O que falar desse projeto? Bom, vamos por partes.
Tudo começou de um descontentamento com a negligência que a arte, e outras formas de expressão artística, sofriam nas escolas (principalmente na nossa).
Com isso nasceu o projeto “A Escola Mata Artistas (?)”
Nele eu, com mais seis alunos, direcionamos nosso projeto por meio de pesquisas e estudos de teses que tratavam sobre a negligência do pensar criativo em sala de aula. 
Cheguei até a ler o livro: “Somos todos criativos: Os desafios para desenvolver uma das principais habilidades do futuro” (Ken Robinson).
Com isso desenvolvemos como projeto final uma exposição com artes dos alunos da escola e algumas obras feitas por nosso próprio grupo que traziam a tona questionamentos sobre a escola promover ou não e pensar criativo e a arte.
Posso dizer que tenho muito orgulho desse projeto, hoje em dia penso que teria feito algumas coisas de forma diferente, mas isso não deixou de ser uma grande experiência em minha vida.
Ninguém esquece tão fácil quando seu professor exige como brinde da exposição 500 rosas de papel (ele exigiu a parte do 500, as rosas foi a gente que escolheu, fazer o que).`,
  },
  {
    backgroundImage: `${experiencia5}`,
    title: "Experiências",
    text: `Normalmente a igreja na qual congrego promove projetos missionários em cidades próximas à Sorocaba. 
Nesses projetos costumo participar na área de Evangelismo Pessoal e Pintura Facial.
São  momentos realmente únicos, cada vez sou tocada de uma forma diferente pelas pessoas que encontro e sou usada de uma forma diferente por Deus. Sempre aprendo sobre serviço e disponibilidade para ajudar onde precisar.
Confesso que amo interagir com as pessoas ao sair para a rua e tenho certo amor por pintar o rosto das crianças.
Adoro e acho muito divertido quando não me pedem simplesmente uma aranha, mas uma aranha verde com uma teia vermelha, uma borboleta diferente, uma cruz depois de ouvirem da Palavra ou até um golfinho com bastante glitter (única coisa é que ainda não sou capaz de fazer um Venom nas crianças).
Esses projetos e todas as pessoas com quem interajo nessas viajens me proporcionam uma maravilhosa vivência.`,
  },
  {
    backgroundImage: `${experiencia6}`,
    title: "Experiências",
    text: `Quando tem aquelas brincadeiras do tipo: “Fale duas verdades e uma mentira”, adoro colocar entre as opções: “Conheci o Valtinho da 2 pessoalmente, ele até me conhece”. Quem me conhece o suficiente sabe o quão louca é minha vida e que, provavelmente, uma coisa dessas seria verdade.
Brincadeiras a parte, esse evento foi um dos mais inusitados que eu não esperava de forma alguma viver. 
Era um dia muito quente e eu, com tédio, aceitei o convite do meu pai de ir em uma lanchonete que por algum motivo teria uma tarde com oficinas de artes.
Eu não apenas conheci o Valtinho da 2, eu fiz um molde vazado do zero e grafitei a parede da lanchonete, eu conheci alguns outros artistas e pude passar a tarde criando.
Diante de dias normais, às vezes o sim é o necessário para você vivenciar histórias malucas que agregaram muito em sua vida.`,
  },
  {
    backgroundImage: `${experiencia7}`,
    title: "Experiências",
    text: `Uma experiência que posso dizer com plena certeza que tem sido de grande crescimento para mim, tanto espiritual quanto qualquer outra coisa, foi ser chamada para servir na liderança.
Confesso, é intimidador e me dá medo? É intimidador e me dá medo. Mas Aquele que me chama para participar da Sua obra é fiel, bom e me capacita. 
Aceitei participar da liderança do Inflame, nela sou responsável especificamente pelas mídias dos adolescentes e acho isso bem legal. Além disso venho liderando a célula das adolescentes da minha igreja desde 2023, vem sendo um desafio mas amo cuidar dessas meninas.
Aprendi que liderar é também sobre humildade, constante crescimento, amadurecimento, serviço e um coração disponível para o que der e vier, seja lavando o pé da galera (quem entendeu a referência?) ou fazendo um post bem bonito para chamar eles pro culto :P`,
  },
  {
    backgroundImage: `${experiencia8}`,
    title: "Experiências",
    text: `Outro projeto escolar, o que posso falar desse? 
Era um projeto de história que nossa sala precisava fazer dos Maias e, modéstia parte, arrasamos.
Quem viu o resultado não imagina as horas de estresse, organização, pesquisa, escrita de cartazes, confecção e pintura de planetas, corte de folhas e flores e a confecção de brigadeiros 80% cacau.
Foi um projeto que eu e minhas amigas estivemos na frente liderando e organizando com grande dedicação.
Adorei ver tudo aquilo pronto e pensar: “Uau, fizemos um ótimo trabalho”, do início ao fim nos dividimos para conquistar sem de forma alguma perder o espírito de equipe para entregar nosso melhor.`,
  },
  {
    backgroundImage: `${experiencia9}`,
    title: "Experiências",
    text: `Em julho de 2024 tive uma experiência única. Tive a grande alegria de fazer um intercâmbio para Londres durante 2 semanas :D
Posso dizer que foram momentos incríveis e, com certeza, inesquecíveis. Cada rua, pessoa, obra de arte, construção e história que vi, nossa!!
Consegui colocar em prática e desenvolver meu inglês (mediano mas melhor do que nada) e ter diversas vivências culturais, tanto da Inglaterra para onde fui, quanto dos países dos outros participantes do intercâmbio.
Lá ganhei um certificado de aprendizado de inglês e de boas maneiras (It’s so amazing). Mas, mais do que isso, conheci diversas pessoas que guardo no coração e sigo no Instagram. Quatro delas, em especial, são meninas maravilhosas que espero ver mais uma vez (basta só um ônibus de 1 dia e 1 hora).`,
  },
  {
    backgroundImage: `${experiencia10}`,
    title: "Experiências",
    text: `Guardo com muito carinho essa oportunidade incrível que meus líderes me deram.
Tive o grande prazer de pintar o quartinho de bebê do Isaac, que era esperado com grande amor e carinho pelos seus pais.
Claro que me entreguei completamente nesse projeto e derramei meu coração em cada detalhe e amei cada momento pintando aquele quartinho.
Eu pensava: “Será que esse menininho vai gostar? Espero que não atrapalhe ele na hora de dormir”. Bom, a parte de dormir não tem sido um problema de acordo com os pais, mas espero que, quando ele aprender a falar, ele possa me dar seu veredito.
Só os meus líderes para me darem essa oportunidade maluca e só eu mesma pra aceitar, estava tão animada!! 
Aliás, também sou muito grata por eles que sempre me incentivam e me apoiam, obrigada.`,
  },
];
// Define o componente principal Experiencias
const Experiencias = () => {
  // Estado que guarda o índice da página atualmente exibida
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Função para ir para o próximo slide
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pages.length);
    // Se for o último slide, volta para o primeiro (efeito de loop)
  };

  // Função para voltar para o slide anterior
  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pages.length - 1 : prevIndex - 1
    );
    // Se estiver no primeiro slide, volta para o último (efeito de loop)
  };

  // Define qual é a página (experiência) atual a ser exibida
  const currentPage = pages[currentIndex];

  // Renderiza o componente
  return (
    <div 
      id="experiencias" 
      className="experienciasContainer"
      style={{ backgroundImage: `url(${currentPage.backgroundImage})` }} // Define a imagem de fundo dinamicamente
    >
      {/* Título da seção */}
      <div className="textos">
        <p>minhas</p>
        <h1><span className="diferente">E</span>xperiências</h1>
      </div>

      {/* Conteúdo da experiência atual */}
      <div className="experienciasContent">
        <p className="experienciasText">{currentPage.text}</p>
      </div>

      {/* Botão para voltar para o slide anterior */}
      <button className="experienciasButton left" onClick={prevSlide}>
        <span className="setaPersonalizada">&#60;</span> {/* Ícone da seta para esquerda */}
      </button>

      {/* Botão para avançar para o próximo slide */}
      <button className="experienciasButton right" onClick={nextSlide}>
        <span className="setaPersonalizada">&#62;</span> {/* Ícone da seta para direita */}
      </button>

      {/* Estrelas decorativas no rodapé */}
      <div className="estrelasRosas">
        <img src={estrelaRosa} alt="Estrela Rosa" />
        <img src={estrelaRosa} alt="Estrela Rosa" />
        <img src={estrelaRosa} alt="Estrela Rosa" />
      </div>
    </div>
  );
}

// Exporta o componente para ser usado em outros lugares do projeto
export default Experiencias;