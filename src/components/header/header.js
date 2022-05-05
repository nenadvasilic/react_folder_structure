import "./styles.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <a className="brand">Brand</a>
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About Us</li>
          <li className="nav-item">Contact Us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
