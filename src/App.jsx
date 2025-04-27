import React from 'react';

import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Menu } from './components/menu';

import menuStyle from './components/menu.module.css';
import style from './App.module.css';
import imagemInicial from './assets/cheelagif1.gif';

import Req from './Req';

 function Page(){
  const [Video, setVideo] = useState(false)
  const [Botao, setBotao] = useState(false)

  return(
    <>
    <main>
    <section className={style.pageSection}>
        <div>
        <img className={style.pageImage} src={imagemInicial} alt="imagem principal da page"/>
        <h2 className={style.pageTitle}>titulo</h2>
        </div>

        <p className={style.pageSlogan}>Cheelai é uma personagem de Dragon Ball Super: Broly que se destaca por sua coragem e empatia. Embora tenha um passado
           de criminalidade e tenha sido recrutada pelo exército de Freeza, ela tem um grande senso de justiça e acaba desafiando os planos de Freeza para salvar Broly, o poderoso lutador.
            Ela usa as Esferas do Dragão para desejar que Broly seja transportado para um planeta seguro, longe da batalha e do perigo.
              Sua amizade com Broly, baseada em compaixão, é uma das chaves para o personagem encontrar a paz e a liberdade.</p>

        <div className={style.pageInfo}>
          <button className={style.pageButton} onClick={ () => {setBotao(true)}}>Quero ver a luta!</button>
        </div>

        <div className={style.pageVideo}>
          {Botao &&   <button className={style.pageButton2} onClick={() => {setVideo(true); } }>Tenho certeza de quero ver!</button>}
          {Video && <iframe width="90%" height="200" src="https://www.youtube.com/embed/mFoOlpKQiMk?si=9qOW0fnxcX56vi06" 
          title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
          picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
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