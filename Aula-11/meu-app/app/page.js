// import Image from "next/image";
import Contador from "./components/contador.js"
import CriarNome from "./components/criarNome.js"
import Relogio from "./components/relogio.js"
import Teclado from "./components/teclado.js"
import Usuarios from "./components/usuarios.js"

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className="nav">
        <a>FILMA<span>.AI</span></a>
        <div className="contentNav">
          <a>Projetos</a>
          <a>Contato</a>
        </div>
      </div>
      <Contador />
      <br />
      <CriarNome />
      <br />
      <Relogio />
      <br />
      <Teclado />
      <br />
      <Usuarios />
    </>
  );
}