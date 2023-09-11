import { Link } from "react-router-dom";
import footerStyle from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
      <Link to="/contact">
        <p className={footerStyle.link}>Contact</p>
      </Link>
    </footer>
  );
};

export default Footer;
