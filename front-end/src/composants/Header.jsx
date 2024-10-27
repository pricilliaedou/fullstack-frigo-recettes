import logo from "../assets/logo.png";

const Header = () => (
  <header>
    <div className='logo'>
      <img src={logo} alt='logo du site' />
    </div>
    <nav>
      <ul>
        <li> Produits</li>
        <li>Recettes</li>
      </ul>
    </nav>
  </header>
);
export default Header;
