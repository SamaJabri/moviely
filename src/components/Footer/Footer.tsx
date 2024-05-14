import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_upper">
        <div className="footer_upper-description">
          <h1>Moviely</h1>
          <p>
            Your all time favorite destination for making your Friday movie
            nights better.
          </p>
        </div>
        <div className="footer_upper-links"></div>
      </div>

      <div className="footer_lower">
        <p>Copyright © 2024 Moviely. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
