import { useEffect, useState } from "react";
import { api } from "../../services/api";
import WithdrawStyle from "./style";

const Withdraw = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCart();
  }, []);

  const filterItemsByStatus = (status: string) => {
    return cart.filter((item: any) => item.status === status);
  };

  const getCart = async () => {
    const resCart = await api.get(`/cart`);
    setCart(resCart.data);
  };

  return (
    <WithdrawStyle>
      <div className="container">
        <div className="cartPrepar">
          <div className="list">
            <h3>Preparando:</h3>
            <ul>
              {filterItemsByStatus("Preparando").map((item: any, index) => (
                <li key={index}>
                  <p>{item.nome}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="final">
          <div className="list">
            <h3>Pronto:</h3>
            <ul>
              {filterItemsByStatus("Finalizado").map((item: any, index) => (
                <li key={index}>
                  <p>{item.nome}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </WithdrawStyle>
  );
};

export default Withdraw;
