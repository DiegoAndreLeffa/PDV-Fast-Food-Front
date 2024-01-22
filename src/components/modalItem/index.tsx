import { FC, useEffect, useState } from "react";
import { api } from "../../services/api";
import { IoClose } from "react-icons/io5";
import ModalItemStyle from "./style";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

interface Extra {
  id: number;
  name: string;
  description: string;
  img: string;
  price: number;
}

interface Item {
  id: number;
  name: string;
  description: string;
  img: string;
  price: number;
  max_quantity?: number;
  category: string;
}

interface ModalItemProps {
  setOpenModal: (value: React.SetStateAction<boolean>) => void;
  item: Item;
  setPedidos: (value: React.SetStateAction<any[]>) => void;
}
interface Extra {
  id: number;
  name: string;
  description: string;
  img: string;
  price: number;
}

interface Item {
  id: number;
  name: string;
  description: string;
  img: string;
  price: number;
  max_quantity?: number;
  category: string;
}

interface ModalItemProps {
  setOpenModal: (value: React.SetStateAction<boolean>) => void;
  item: Item;
  setPedidos: (value: React.SetStateAction<any[]>) => void;
}

const ModalItem: FC<ModalItemProps> = ({ setOpenModal, item, setPedidos }) => {
  const [extras, setExtras] = useState<Extra[]>([]);
  const [selectedExtras, setSelectedExtras] = useState<Record<number, boolean>>(
    {}
  );
  const [selectedExtrasNames, setSelectedExtrasNames] = useState<string[]>([]);
  const [count, setCount] = useState<number>(1);
  const [maxCount, setMaxCount] = useState<number | undefined>(
    item.max_quantity || 10
  );
  const [totalPrice, setTotalPrice] = useState<number>(Number(item.price));

  const handleAddToOrder = () => {
    const observationElement = document.getElementById("observation");
    const observationValue =
      observationElement instanceof HTMLInputElement
        ? observationElement.value
        : "";

    const order = {
      item: {
        id: item.id,
        name: item.name,
        description: item.description,
        img: item.img,
      },
      quantity: count,
      extras: selectedExtrasNames,
      observation: observationValue,
      totalPrice: totalPrice,
    };

    setPedidos((prevPedidos) => [...prevPedidos, order]);
    setOpenModal(false);
  };

  useEffect(() => {
    const getExtras = async () => {
      const resExtras = await api.get<Extra[]>(`/extra`);
      setExtras(resExtras.data);
    };
    getExtras();
  }, []);

  const formattedPrice = Number(item.price).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const increment = () => {
    if (count < maxCount! || !item.max_quantity) {
      setCount((prevCount) => prevCount + 1);
      setTotalPrice((prevTotal) => prevTotal + Number(item.price));
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
      setTotalPrice((prevTotal) => prevTotal - Number(item.price));
    }
  };

  const handleExtraSelect = (extraId: number) => {
    if (selectedExtras[extraId]) {
      const newSelectedExtras = { ...selectedExtras };
      delete newSelectedExtras[extraId];
      const newSelectedExtrasNames = selectedExtrasNames.filter(
        (name) => name !== extras.find((e) => e.id === extraId)!.name
      );
      setSelectedExtras(newSelectedExtras);
      setSelectedExtrasNames(newSelectedExtrasNames);
      setTotalPrice(
        (prevTotal) =>
          prevTotal - Number(extras.find((e) => e.id === extraId)!.price)
      );
    } else {
      // Extra was not selected, add it
      const newSelectedExtras = { ...selectedExtras, [extraId]: true };
      setSelectedExtras(newSelectedExtras);
      const extraName = extras.find((e) => e.id === extraId)!.name;
      setSelectedExtrasNames((prevNames) => [...prevNames, extraName]);
      setTotalPrice(
        (prevTotal) =>
          prevTotal + Number(extras.find((e) => e.id === extraId)!.price)
      );
    }
  };

  return (
    <ModalItemStyle>
      <div className="modalBody">
        <div className="title">
          <p>Revise seu pedido!</p>
          <div>
            <IoClose onClick={() => setOpenModal(false)} />
          </div>
        </div>
        <div className="info">
          <div className="divImg">
            <div>
              <div className="img">
                <img src={item.img + ".png"} alt={item.name} />
              </div>
            </div>
          </div>
          <div className="infoItem">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className="counter">
              <div className="btn" onClick={() => decrement()}>
                <FaMinus></FaMinus>
              </div>
              <div>
                <p>{count}</p>
              </div>
              <div className="btn" onClick={() => increment()}>
                <FaPlus></FaPlus>
              </div>
            </div>
          </div>
          <div>
            <p>{formattedPrice}</p>
          </div>
        </div>
        {(item.category == "lanches" || item.category == "combos") && (
          <div className="extras">
            <h3>Adicionais</h3>
            <span>
              Selecione os ingredientes que você quer adicionar a mais no seu
              lanche.
            </span>

            <ul>
              {extras.map((extra) => (
                <li key={extra.id}>
                  <div className="extraImg">
                    <img src={extra.img + ".png"} alt="" />
                  </div>
                  <div className="infoExtras">
                    <h4>{extra.name}</h4>
                    <p>{extra.description}</p>
                  </div>
                  <div>
                    <p>R$ {extra.price}</p>
                  </div>
                  <label className="cr-wrapper">
                    <input
                      type="checkbox"
                      name={`extra-${extra.id}`}
                      id={`extra-${extra.id}`}
                      checked={selectedExtras[extra.id]}
                      onChange={() => handleExtraSelect(extra.id)}
                    />
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="obs">
          <h3>Observações</h3>
          <textarea
            name=""
            id="observation"
            placeholder="Adicione uma observação ao pedido"
          ></textarea>
        </div>
        <div className="total">
          <div className="itensTotal">
            <div>
              <p>
                {" "}
                {count}x {item.name}
              </p>

              <div>
                <p>{selectedExtrasNames.join(", ")}</p>
              </div>
            </div>
            <p>
              {totalPrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
          <div className="priceTotal">
            <p>Total do pedido:</p>
            <p>
              {totalPrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
        </div>
        <div className="buttons">
          <button onClick={handleAddToOrder}>Continuar adicionando</button>
          <button className="final" onClick={handleAddToOrder}>
            Adicionar ao pedido
          </button>
        </div>
      </div>
    </ModalItemStyle>
  );
};

export default ModalItem;
