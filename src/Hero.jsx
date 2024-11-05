import "./Hero.css";
import backgroundImage from "./assets/My picture.jpeg";
function Hero() {
  return (
    <>
      <nav>
        <div className="section">
          <section>
            <ul className="itens">
              <li className="item">
                <a href="#Eu">Quem sou eu?</a>
              </li>
              <li className="item">
                <a href="#Projetos">Projetos</a>
              </li>
            </ul>
          </section>
        </div>
      </nav>
      <div className="text-container">
        <h1>
          Olá! <br></br>Eu sou Ítalo Granjo
        </h1>
        <p>
          Sou um <span>desenvolvedor web full-stack</span> de Aracaju-SE que
          busca sempre otimizar minhas aplicações
        </p>
        <div className="info">
          <button className="contact">
            <span className="material-symbols-outlined">mail</span>Entre em
            contato
          </button>
          <button className="resume">
            <span class="material-symbols-outlined">download</span>Baixar o
            currículo
          </button>
        </div>
      </div>

      <div className="bg-img">
        <img src="./assets/My Picture.jpeg" alt="" />
      </div>
    </>
  );
}

export default Hero;
