import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.module.css'
import Req from './Req';
import style from './App.module.css';
import menuStyle from './components/menu.module.css';
import { Menu } from './components/menu';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

import luta from "./assets/images/luta.mp4";

function SobreMim() {
  const [aparecerVideo, setAparecerVideo] = useState(false)
  const [aparecerBotao, setAparecerBotao] = useState(false)

  return (
    <section id='sobre-mim' className={style.sobreMimSection}>
       <video autoPlay muted loop className={style.backgroundVideo}>
              <source src={luta}  type="video/mp4"/>
      </video>
      <div className={style.sobreMimBackgroundContainer}>
        <h2 className={style.sobreMimTitle}>Sobre mim</h2>
      </div>

      <div className={style.profileImageContainer}>
      {/* img */}
      </div>
      <div className={style.wrapInfo}>
        <p className={style.paragrafoLP}>Durante o Torneio do Poder em "Dragon Ball Super", Goku enfrenta Jiren, o guerreiro mais forte 
          do Universo 11. Em uma luta intensa e cheia de reviravoltas, Goku ultrapassa seus limites ao despertar o Instinto Superior, uma técnica 
          que permite movimentos quase automáticos. Mesmo com o imenso poder de Jiren, Goku mostra seu espírito de luta incansável, resultando em uma das batalhas mais emocionantes de toda a franquia.</p>
        <button className={style.btAparecerB} onClick={ () => {setAparecerBotao(true)}}>Quero ver a luta!</button>
        </div>

        <div className={style.AparecerVideo}>
       {aparecerBotao &&   <button className={style.btAparecerV} onClick={() => {setAparecerVideo(true); } }>Tenho certeza de quero ver!</button>}
      
       {aparecerVideo && <iframe width="90%" height="200" src="https://www.youtube.com/embed/mFoOlpKQiMk?si=9qOW0fnxcX56vi06" 
       title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
       picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
       </div>

    </section>
  );
}

function Footer() {
  return (
    <footer>
      <a href="https://linkedin.com/in/kevilin-marcondes" target="_blank" rel="noopener noreferrer">
        <FaLinkedin style={{ marginRight: '5px', verticalAlign: 'middle' }} /> LinkedIn
      </a>
      <a href="https://www.instagram.com/kkkkev._/" target="_blank" rel="noopener noreferrer">
        <FaInstagram style={{ marginRight: '5px', verticalAlign: 'middle' }} /> Instagram
      </a>
      <a href="https://github.com/azedomel" target="_blank" rel="noopener noreferrer">
        <FaGithub style={{ marginRight: '5px', verticalAlign: 'middle' }} /> GitHub
      </a>
    </footer>
  );
}

function PaginaPrincipal() {
  return (
    <main>
      <SobreMim />
      <Footer />
    </main>
  );
}


export default function App() {
  return (
    <>
    <div>
      <Menu
        option01={<a href="/" className={menuStyle.navLink}>Sobre Mim</a>}
        option02={<Link to="/req" className={menuStyle.navLink}>API Rick and Morty</Link>}
      />

      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path='/req' element={<Req/>}/>
      </Routes>
</div>
    </>
  )
}