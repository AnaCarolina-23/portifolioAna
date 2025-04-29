// Importa o CSS e as imagens usadas nesse componente
import './Destaques.css';
import destaques1 from '../assets/destaques1.png';
import destaques2 from '../assets/destaques2.png';
import destaques3 from '../assets/destaques3.png';
import destaques4 from '../assets/destaques4.png';
import destaques5 from '../assets/destaques5.png';
import destaques6 from '../assets/destaques6.png';
import destaques7 from '../assets/destaques7.png';
import destaques8 from '../assets/destaques8.png';
import destaques9 from '../assets/destaques9.png';
import estrelaVerdeClara from '../assets/estrelaVerdeClaro.png';
import borda2 from '../assets/bordaAzul2.png';

const Destaques = () => {
    return (
      // Seção "Destaques" do site
      <div id='destaques' className='destaques'>
        <div className='conteudo'>
          
          {/* Título da seção */}
          <div className="titulo">
              <h1><span className="diferente">D</span>estaques</h1>
          </div>

          {/* Galeria de imagens com links externos */}
          <div className='imagens'>
              {/* Cada imagem leva para um link (Instagram ou Canva) */}
              <a href="https://www.instagram.com/p/Cl6-NeXuEj7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target='_blank' rel='noopener noreferrer'><img src={destaques1} alt="meus destaques" /></a>
              <a href="https://www.instagram.com/p/CxgasBaOdq2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target='_blank' rel='noopener noreferrer'><img src={destaques2} alt="meus destaques" /></a>
              <a href="https://www.instagram.com/p/CZL8TyGOEEj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target='_blank' rel='noopener noreferrer'><img src={destaques3} alt="meus destaques" /></a>
              <a href="https://www.instagram.com/p/CR9d5Kcn7R-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target='_blank' rel='noopener noreferrer'><img src={destaques4} alt="meus destaques" /></a>
              <a href="https://www.instagram.com/p/CmAhiuROcZW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target='_blank' rel='noopener noreferrer'><img src={destaques5} alt="meus destaques" /></a>
              <a href="https://www.instagram.com/p/CuhTavEu8_A/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target='_blank' rel='noopener noreferrer'><img src={destaques6} alt="meus destaques" /></a>
              <a href="https://www.canva.com/design/DAGld4xjiHY/lQ8aKKubg9fsHXctMFNhDA/edit?utm_content=DAGld4xjiHY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target='_blank' rel='noopener noreferrer'><img src={destaques7} alt="meus destaques" /></a>
              <a href="https://www.instagram.com/p/CvF3BxPum6_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target='_blank' rel='noopener noreferrer'><img src={destaques8} alt="meus destaques" /></a>
              <a href="https://www.canva.com/design/DAGkDr2S2eY/JhV-hOhAfUbpDM0GiOf0LQ/edit?utm_content=DAGkDr2S2eY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target='_blank' rel='noopener noreferrer'><img src={destaques9} alt="meus destaques" /></a>
          </div>

          {/* Estrelas decorativas */}
          <div className='estrelasVerdeClara'>
              {/* Repete a estrela verde clara várias vezes */}
              <img src={estrelaVerdeClara} alt="estrela verde clara" />
              <img src={estrelaVerdeClara} alt="estrela verde clara" />
              <img src={estrelaVerdeClara} alt="estrela verde clara" />
              <img src={estrelaVerdeClara} alt="estrela verde clara" />
              <img src={estrelaVerdeClara} alt="estrela verde clara" />
              <img src={estrelaVerdeClara} alt="estrela verde clara" />
              <img src={estrelaVerdeClara} alt="estrela verde clara" />
              <img src={estrelaVerdeClara} alt="estrela verde clara" />
              <img src={estrelaVerdeClara} alt="estrela verde clara" />
          </div>

        </div>

        {/* Borda decorativa azul no final da seção */}
        <div className='borda'>
            <img src={borda2} alt="borda azul" />
        </div>
      </div>
    );
};

export default Destaques;