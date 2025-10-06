import logoImg from "../assets/logoWhite.png"; 
import "../App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_content">
        {/* Logo + redes */}
        <div className="footer_logo">
          <img src={logoImg} alt="HigadoMed Logo" className="footer_img" />
          <div className="footer_socials">
            <a href="https://youtube.com/@higadomed?si=mUJ-d0hiXH9Mib76" target="_blank" rel="noreferrer">
            <i className="bi bi-youtube"></i></a>
            <a href="https://www.instagram.com/higadomed?igsh=MWRnNWlvMTFvd2xyaw%3D%3D&utm_source=qr" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>

        {/* Horarios */}
        <div className="footer_hours">
          <h4>Horarios de Atención</h4>
          <p>Lunes – Viernes | 8:00AM - 5:00PM</p>
          <p>Sábados | 8:00AM - 12:00M</p>
        </div>

        {/* Ubicaciones */}
        <div className="footer_locations">
          <h4>Encuéntranos en</h4>
          <a href="#locations">Torre Médica las Américas</a>
          <a href="#locations">Centro Médico CAMES</a>
          <a href="#locations">Clínica Llano Grande</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
