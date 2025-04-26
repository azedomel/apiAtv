import { useEffect, useState } from "react";
import { apiDB } from "./api/api";
import { Card } from "./Card";
import style from "./Req.module.css";
import { Menu } from "./components/menu";

import logoApi from "./assets/images/logo_dragonballapi.webp";

export default function Req() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState("");

  const [erro, setErro] = useState(false);

  useEffect(() => {
    apiDB
      .get(`/characters?page=${page}`)
      .then((res) => {
        setData(res.data.items);
        console.log(res.data.items);
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
      <Menu option01="Voltar" option02="" />

      <section className={style.wrapPage}>
      
        <div className={style.imageApi}>
          <img src={logoApi} alt="logoApi" className={style.logoApi} />
        </div>
        <h1 className={style.titleApi}>The Dragon Ball API</h1>,
        <div className={style.containerInput}>
          <input
            type="text"
            placeholder="Digite uma pagina de 1 a 6"
            value={page}
            onChange={(e) => setPage(e.target.value)}
          />
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
