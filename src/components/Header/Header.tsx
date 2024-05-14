// Libraries
import { useState, useEffect } from "react";

// Styling
import "./header.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    offset > 250 ? setScrolled(true) : setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header ${scrolled ? "header_scrolled" : ""}`}>Moviely</div>
  );
};

export default Header;
