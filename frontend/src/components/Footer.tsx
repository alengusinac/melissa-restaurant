import { Link } from "react-router-dom";
import footerStyle from "../styles/Footler.module.scss";

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
