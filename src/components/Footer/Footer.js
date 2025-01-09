import "./Footer.css";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <div>Developed by Sterling Brayboy</div>
      <div>{currentYear}</div>
    </footer>
  );
};

export default Footer;
