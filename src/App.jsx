import React from 'react';

import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Menu } from './components/menu';

import menuStyle from './components/menu.module.css';
import style from './App.module.css';
import imagemInicial from './assets/cheelagif1.gif';
import wallpaper from './assets/wallpaper.gif';

import Req from './Req';

 function Page(){
  const [Video, setVideo] = useState(false)
  const [Botao, setBotao] = useState(false)

  return(
    <>
    <main>
    <section className={style.pageSection}>
        <img  src={wallpaper} className={style.backgroundVideo}></img>
        <img className={style.pageImage} src={imagemInicial} alt="imagem principal da page"/>
        <h2 className={style.pageTitle}>Dragon Ball API</h2>
        
        

        <div className={style.pageInfo}>
          <button className={style.pageButton} onClick={ () => {setBotao(true)}}> Primeira Transformação de Goku em Super Saiyajin
         </button>
        </div>

        <div className={style.pageVideo}>
          {Botao && (
            <div>
              <p className={style.pageSlogan}>Goku se transforma em Super Saiyajin pela primeira vez após ver seu amigo Krillin ser morto por Freeza. 
              A raiva e a dor de perder alguém querido despertam um poder oculto em Goku, que muda seu cabelo para dourado e seus olhos
              para verdes, marcando o início de sua nova força e habilidade. Esse momento é um dos mais icônicos de Dragon Ball.</p>
              <button className={style.pageButton2} onClick={() => {setVideo(true);}}>Clique para ver o vídeo da transformação</button>
            </div>
          )}
          {Video && <iframe className={style.videoPlay} src="https://www.youtube.com/embed/bbCQ-XiXKbo?si=pA9lPVY0qHCPAqqf"></iframe>}
        </div>
        
    </section>
    </main>

    <footer>
      <a href="https://linkedin.com/in/kevilin-marcondes" target="_blank" rel="noopener noreferrer">
        <FaLinkedin style={{ marginRight: '5px', verticalAlign: 'middle' }} /> LinkedIn
      </a>
      <a href="https://github.com/azedomel" target="_blank" rel="noopener noreferrer">
        <FaGithub style={{ marginRight: '5px', verticalAlign: 'middle' }} /> GitHub
      </a>
    </footer>
    </>
  );
}

export default function App() {
return (
    <>
      <Menu
        option01={<a href="/*" className={menuStyle.navLink}>Início</a>}
        option02={<Link to="/Req" className={menuStyle.navLink}>Dragon Ball API</Link>}
      />
        <Routes>
          <Route path='/*' element={<Page/>} />
          <Route path='./Req' element={<Req/>}/>
        </Routes>
    </>
  )
}