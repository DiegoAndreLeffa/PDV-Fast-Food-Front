import Nav from "./style";
import logo from "../../assets/Logo.jpg";

import { Dispatch, SetStateAction } from "react";

interface NavbarProps {
  setSelectedButton: Dispatch<SetStateAction<string>>;
  selectedButton: string;
}

const Navbar: React.FC<NavbarProps> = ({
  setSelectedButton,
  selectedButton,
}) => {
  //onClick={setPay(false)}
  return (
    <Nav className="navbar">
      <div className="navbar-logo">
        <img
          src={logo}
          alt="FastFood Logo"
          onClick={() => setSelectedButton("pedidos")}
        />
      </div>
      <div className="navbar-buttons">
        <a
          className={selectedButton === "pedidos" ? "selected-btn" : ""}
          onClick={() => setSelectedButton("pedidos")}
        >
          Pedidos
        </a>
        <a
          className={selectedButton === "cozinha" ? "selected-btn" : ""}
          onClick={() => setSelectedButton("cozinha")}
        >
          Cozinha
        </a>
        <a
          className={selectedButton === "retirada" ? "selected-btn" : ""}
          onClick={() => setSelectedButton("retirada")}
        >
          Retirada
        </a>
      </div>
    </Nav>
  );
};

export default Navbar;
