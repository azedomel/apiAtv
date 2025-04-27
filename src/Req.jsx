import { useEffect, useState } from "react";
import { apiDragonBall } from "./api/api";

import { Card } from "./components/card";
import { Menu } from "./components/menu";

import style from "./Req.module.css";
import menuStyle from "./components/menu.module.css";

import logoApi from "./assets/logo.webp";

export default function Req() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState("");

  const [erro, setErro] = useState(false);

  useEffect(() => { 
    apiDragonBall.get(`/characters?page=${page}`).then((res) => {
        setData(res.data.results);
        console.log(res.data.results);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setErro(true);
        }
        console.log(error);
      });
  }, [page]);

  return (  
    <>
      <Menu option01={<a href="/*" className={menuStyle.navLink}>Início</a>}/>

      <section className={style.wrapPage}>
          <img src={logoApi} alt="logoApi" className={style.logoApi} height={"80px"} width={"auto"}/>
        <h1 className={style.titleApi}>Dragon Ball API</h1>
        <div className={style.containerInput}>
          <input type="text" placeholder="Digite uma pagina de 1 a 6" value={page} onChange={(e) => setPage(e.target.value)}/>
          {erro && <p>Pagina não encontrada</p>}
        </div>
        <div className={style.wrapCards}>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <Card
                  name={item.name}
                  image={item.image}
                  ki={item.ki}
                  maxKi={item.maxKi}
                  race={item.race}
                  gender={item.gender}
                  affiliation={item.affiliation}
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
