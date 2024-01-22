import { FC, useEffect, useState } from "react";
import { api } from "../../services/api";
import KitchenStyle from "./style";
import { IoClose, IoCheckmark } from "react-icons/io5";

interface CartItem {
  id: number;
  codigo: number;
  nome: string;
  primeiraImagem: string;
  itens: {
    name: string;
    quantity: number;
    extras: string[];
  }[];
  status: string;
}

const Kitchen: FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    getCart();
  }, []);

  const filterItemsByStatus = (status: string) => {
    return cart.filter((item) => item.status === status);
  };

  const deleteCart = async (id: number) => {
    try {
      await api.delete(`/cart/${id}`);
      getCart();
    } catch (error) {
      alert("Erro ao deletar o produto do carrinho");
    }
  };

  const getCart = async () => {
    const resCart = await api.get(`/cart`);
    setCart(resCart.data);
  };

  const upCart = async (id: number) => {
    try {
      await api.patch(`/cart/${id}`);
      getCart();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KitchenStyle>
      <div className="container">
        <div className="cartPrepar">
          <div className="list">
            <h3>Preparando:</h3>
            <ul>
              {filterItemsByStatus("Preparando").map((item, index) => (
                <li key={index}>
                  <div className="infoBody">
                    <div className="img">
                      <img src={item.primeiraImagem} alt="" />
                    </div>
                    <div className="info">
                      <p className="infoName">
                        {item.codigo} - {item.nome}
                      </p>

                      {item.itens.map((subItem, subIndex) => (
                        <div key={subIndex}>
                          <p>
                            {subItem.quantity}x {subItem.name}
                          </p>
                          {subItem.extras.length > 0 && (
                            <span>{subItem.extras.join(", ")}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="buttons">
                    <IoClose
                      className="x"
                      onClick={() => deleteCart(item.id)}
                    />
                    <IoCheckmark
                      className="v"
                      onClick={() => upCart(item.id)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="obs">
            <p>Observações:</p>
            <div className="text"></div>
          </div>
        </div>
        <div className="final">
          <div className="list">
            <h3>Pronto:</h3>
            <ul>
              {filterItemsByStatus("Finalizado").map((item, index) => (
                <li key={index}>
                  <div className="infoBody">
                    <div className="img">
                      <img src={item.primeiraImagem} alt="" />
                    </div>
                    <div className="info">
                      <p className="infoName">
                        {item.codigo} - {item.nome}
                      </p>
                      <div>
                        {item.itens.map((subItem, subIndex) => (
                          <div key={subIndex}>
                            <p>
                              {subItem.quantity}x {subItem.name}
                            </p>
                            {subItem.extras.length > 0 && (
                              <span>{subItem.extras.join(", ")}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="buttons">
                    <IoClose
                      className="x"
                      onClick={() => deleteCart(item.id)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </KitchenStyle>
  );
};

export default Kitchen;
