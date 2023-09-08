import headerStyles from "../styles/Header.module.scss";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const isAtHome = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isAtHome.pathname === "/" && windowWidth < 768) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  }, [isAtHome, windowWidth]);

  return (
    <header
      className={`${headerStyles.header} ${
        isAtHome.pathname === "/" ? "hh" : headerStyles.headerHeight
      }`}
    >
      <h1 className={headerStyles.title}>
        <Link to="/">
          {showMessage && (
            <>
              Welcome to restaurant
              <br />
            </>
          )}
          <span className={headerStyles.name}>Melissa</span>
        </Link>
      </h1>
    </header>
  );
};

export default Header;
