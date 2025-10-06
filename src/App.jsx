import { useState } from "react";
import doctorImg from "./assets/Doctor.png";
import plusImg from "./assets/+.svg";
import Header from "./componets/header.jsx";
import Footer from "./componets/footer.jsx";
import "./App.css";

function App() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <Header />

      <main className="main">
        <div className="main_text">
          <h3>Cuidamos tu Hígado</h3>
          <h1>Hepatología holística y de precisión a tu servicio.</h1>
          <p>
            Servicios de atención integral y humanizada para tu salud en las
            mejores manos
          </p>
          <a href="#locations" className="defauld_btn desktop_only">
            <i className="bi bi-telephone"></i> Agenda tu cita
          </a>
        </div>

        <div className="main_container_img">
          <img className="main_doctor_img" src={doctorImg} alt="Doctor" />
        </div>
      </main>

      <section id="services" className="services">
        <h2 className="services_title">Servicios Destacados</h2>

        <div className="services_grid">
          <div className="service_card">
            <div>
              <img
                className="service_img service_img_blue"
                src={plusImg}
                alt=""
              />
            </div>
            <div>
              <h4>Hígado Graso</h4>
              <p>
                Esteatosis hepática y sus subtipos: metabólica, alcohólica,
                medicamentosa, mixta
              </p>
            </div>
          </div>

          <div className="service_card">
            <div>
              <img
                className="service_img service_img_blue"
                src={plusImg}
                alt=""
              />
            </div>
            <div>
              <h4>Hepatitis Virales</h4>
              <p>
                Atención integral de todos los subtipos de hepatitis virales,
                por ejemplo: A, B, C, D, E, F, G.
              </p>
            </div>
          </div>

          <div className="service_card">
            <div>
              <img
                className="service_img service_img_blue"
                src={plusImg}
                alt=""
              />
            </div>
            <div>
              <h4>Programa Hígado Sano</h4>
              <p>
                Chequeo ejecutivo de la salud hepática, evaluación diagnóstica
                de posibles afecciones del hígado
              </p>
            </div>
          </div>

          <div className="service_card">
            <div>
              <img
                className="service_img service_img_blue"
                src={plusImg}
                alt=""
              />
            </div>
            <div>
              <h4>FIBROSCAN</h4>
              <p>
                Prueba diagnóstica no invasiva que permite detectar de forma
                temprana y controlar enfermedades del hígado
              </p>
            </div>
          </div>

          <div className="service_card">
            <div>
              <img
                className="service_img service_img_blue"
                src={plusImg}
                alt=""
              />
            </div>
            <div>
              <h4>Cirrosis e Hipertensión Portal</h4>
              <p>Subtipos de hepatopatías y complicaciones derivadas</p>
            </div>
          </div>

          <div className="service_card">
            <div>
              <img
                className="service_img service_img_blue"
                src={plusImg}
                alt=""
              />
            </div>
            <div>
              <h4>Teleconsultas</h4>
              <p>
                Telemedicina y Teleexperticia (Consulta en línea, teleapoyo,
                educación médica)
              </p>
            </div>
          </div>
        </div>

        <div className="services_more">
          <button
            className="services_btn"
            onClick={() => setShowMore(!showMore)}
          >
            Más Servicios de HígadoMed{" "}
            <i className={`bi bi-chevron-${showMore ? "up" : "down"}`}></i>
          </button>
          {showMore && (
            <div className="services_extra">
              <ul>
                <li>Enfermedades autoinmunes hepatocelulares</li>
                <li>Trasplante hepático del adulto (THC)</li>
                <li>Cáncer hepático</li>
                <li>Enfermedades del metabolismo</li>
                <li>Lesiones hepáticas benignas</li>
                <li>Trastornos de la bilirrubina e ictericia</li>
                <li>Afecciones hepáticas en el embarazo</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <section id="locations" className="locations">
        <h2 className="locations_title">
          Agenda tu cita en la sede más cercana
        </h2>
        <p className="locations_subtitle">
          Comunícate por teléfono o WhatsApp, y agenda tu cita de manera fácil y
          rápida.
        </p>

        <div className="locations_grid">
          <div className="location_card">
            <h3>Torre Médica las Américas</h3>
            <h4>Consultorio 609, 705</h4>
            <p>
              <i className="bi bi-geo-alt-fill pink_text"></i> Diagonal 75B #2A
              – 80, Torre 2 Belén la Mota Medellín, Colombia.
            </p>
            <a
              className="pink_text"
              href="https://maps.app.goo.gl/gzaEwcVLFLGDXJEs7"
              target="_blank"
              rel="noreferrer"
            >
              Ver en google Maps
            </a>
            <p>
              <i className="bi bi-telephone-outbound-fill pink_text"></i> 300
              711 2658 - 313 761 3212
            </p>
            <a
              target="_blank"
              href="https://wa.me/573007112658? text=%C2%A1Hola!%20Vengo%20de%20la%20p%C3%A1gina%20web%20de%20Higadomed%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita%20con%20el%20Dr.%20V%C3%ADctor%20Escand%C3%B3n"
              className="defauld_btn"
            >
              <i className="bi bi-telephone"></i> Agenda tu cita
            </a>
          </div>

          <div className="location_card">
            <h3>Centro Médico CAMES</h3>
            <p>
              <i className="bi bi-geo-alt-fill pink_text"></i> Calle 33A número
              71 A – 127 Medellín, Colombia.
            </p>
            <a
              className="pink_text"
              href="https://maps.app.goo.gl/fs6gBAfDmaPYX55D6"
              target="_blank"
              rel="noreferrer"
            >
              Ver en google Maps
            </a>
            <p>
              <i className="bi bi-telephone-outbound-fill pink_text"></i> 305
              2657939 - 313 761 3212
            </p>
            <a
              target="_blank"
              href="https://wa.me/573052657939?text=%C2%A1Hola!%20Vengo%20de%20la%20p%C3%A1gina%20web%20de%20Higadomed%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita%20con%20el%20Dr.%20V%C3%ADctor%20Escand%C3%B3n"
              className="defauld_btn"
            >
              <i className="bi bi-telephone"></i> Agenda tu cita
            </a>
          </div>

          <div className="location_card">
            <h3>Clínica Llano Grande</h3>
            <p>
              <i className="bi bi-geo-alt-fill pink_text"></i> Ubicada en el km
              2 de la milla de Oro de Llanogrande Vereda Chino Rionegro,
              Antioquia.
            </p>
            <a
              className="pink_text"
              href="https://maps.app.goo.gl/NfwQLWE42XzoTTGv6"
              target="_blank"
              rel="noreferrer"
            >
              Ver en google Maps
            </a>
            <p>
              <i className="bi bi-telephone-outbound-fill pink_text"></i> 300
              328 4673 - 313 761 3212
            </p>
            <a
              target="_blank"
              href="https://wa.me/573003284673?text=%C2%A1Hola!%20Vengo%20de%20la%20p%C3%A1gina%20web%20de%20Higadomed%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita%20con%20el%20Dr.%20V%C3%ADctor%20Escand%C3%B3n"
              className="defauld_btn"
            >
              <i className="bi bi-telephone"></i> Agenda tu cita
            </a>
          </div>
        </div>
      </section>

      <section className="instagram">
        <button className="instagram_btn">Mira lo último 👇</button>
        <h2 className="instagram_title">Aprende más sobre tu salud hepática</h2>
        <p className="instagram_subtitle">
          Suscríbete a nuestro canal de YouTube y aprende con tips claros y
          confiables. <br />
          Síguenos también en Instagram <span>@higadomed 💜</span>
        </p>
        <div className="instagram_grid">
          {/* Reel 1 - Servicios */}
          <div className="insta_post">
            <iframe
              src="https://www.instagram.com/reel/DOqoyuDDl6v/embed"
              title="Reel Servicios"
              allowTransparency="true"
              frameBorder="0"
              scrolling="no"
              allow="encrypted-media"
            ></iframe>
          </div>

          {/* Reel 2 - Fibroscan */}
          <div className="insta_post">
            <iframe
              src="https://www.instagram.com/reel/DPT5gnbDoHI/embed"
              title="Reel Fibroscan"
              allowTransparency="true"
              frameBorder="0"
              scrolling="no"
              allow="encrypted-media"
            ></iframe>
          </div>

          {/* Reel 3 - Programa Hígado Sano */}
          <div className="insta_post">
            <iframe
              src="https://www.instagram.com/reel/DPC19q1jggS/embed"
              title="Reel Programa Hígado Sano"
              allowTransparency="true"
              frameBorder="0"
              scrolling="no"
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="youtube">
        <button className="youtube_btn">Nuestro canal 👇</button>
        <h2 className="youtube_title">Últimos videos de HigadoMed</h2>
        <p className="youtube_subtitle">
          Mira las últimas publicaciones y consejos del Dr. Escandón
          directamente desde nuestro canal de YouTube.
        </p>
        <div className="youtube_container">
          <iframe
            src="https://www.youtube.com/embed?list=UUi85Ml4SKdwjpQb0oRoQxkQ"
            title="HigadoMed - Últimos videos"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
