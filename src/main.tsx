// Importa modo restrito do React (ajuda a identificar problemas)
import { StrictMode } from 'react';
// Importa função para renderizar a aplicação
import { createRoot } from 'react-dom/client';
// Importa o CSS global
import './index.css';
// Importa o componente principal da aplicação
import App from './App.tsx';

// Renderiza o App dentro da div #root com StrictMode ativado
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
