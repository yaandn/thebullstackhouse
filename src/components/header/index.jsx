import "./header.css";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import Logo from "../../assets/images/logo-light.png";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/" className="logo">
        <img src={Logo} alt="logo-thebull" className="logo-img" />
      </Link>
      <nav className="nav-container">
        <ul className="nav-list">
          <li>
            <Link to="/cardapio" className="nav-itens">
              <span>CARDÁPIO</span>
            </Link>
          </li>

          <li>
            <Link to="/faleconosco" className="nav-itens">
              <span>FALE CONOSCO</span>
            </Link>
          </li>

          <li>
            <Link to="/nossahistoria" className="nav-itens">
              <span>NOSSA HISTÓRIA</span>
            </Link>
          </li>

          <li>
            <Link to="/eventos" className="nav-itens">
              <span>EVENTOS</span>
            </Link>
          </li>

          <li>
            <Link to="/promocoes" className="nav-itens">
              <span>PROMOÇÕES</span>
            </Link>
          </li>

          <li>
            <a
              to="*"
              className="nav-icons"
              href="https://www.facebook.com/thebullsteakhouseoficial"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillFacebook />
            </a>
          </li>

          <li>
            <a
              className="nav-icons"
              href="https://www.instagram.com/thebullsteakhouse/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
