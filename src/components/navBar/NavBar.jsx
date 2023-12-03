import CartWidget from "../CartWidget/CartWidget";
import './Navbar.css';

const Navbar = () => {
  const imgCarrito = '../CartWidget/carrito1.png'; 

  return (
    <nav>
      <h1>LodePepe</h1>
      <ul>
        <li><a href="#">Arepas</a></li>
        <li><a href="#">Bebidas</a></li>
        <li><a href="#">Empanadas</a></li>
      </ul>
      <CartWidget itemCount={3} imgCarrito={imgCarrito} />
    </nav>
  );
};

export default Navbar;
