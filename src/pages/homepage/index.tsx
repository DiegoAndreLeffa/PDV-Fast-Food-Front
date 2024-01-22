import {
  CardProducts,
  Kitchen,
  Navbar,
  Payment,
  Withdraw,
} from "../../components";
import combo from "../../assets/pngwing.com (19).png";
import sobremesas from "../../assets/pngwing.com (7).png";
import acompanhamentos from "../../assets/pngwing.com (9).png";
import bebidas from "../../assets/pngwing.com.png";
import Main from "./style";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import ModalItem from "../../components/modalItem";

const HomePage = () => {
  const [products, setProducts] = useState<any>([]);
  const [productsFilter, setProductsFilter] = useState<any>([]);
  const [productsCategory, setProductsCategory] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalItem, setModalItem] = useState<any>();
  const [pedidos, setPedidos] = useState<any>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [productsFilterByName, setProductsFilterByName] = useState<any>([]);
  const [pay, setPay] = useState<boolean>(false);
  const [selectedButton, setSelectedButton] = useState<string>(
    localStorage.getItem("selectedButton") || "pedidos"
  );

  useEffect(() => {
    const getProducts = async () => {
      const resProducts = await api.get(`/sandwich`);
      setProducts(resProducts.data);
    };
    getProducts();

    localStorage.setItem("selectedButton", selectedButton);
  }, [selectedButton]);

  const filterProductsByCategory = (category: string) => {
    if (productsCategory === category) {
      setProductsFilter([]);
      setProductsCategory("");
      return;
    }

    setProductsCategory(category);
    const array = products.filter(
      (product: any) => product.category === category
    );
    setProductsFilter(array);
    return;
  };

  const filterProductsByName = async (name: string) => {
    if (searchText == "") {
      setProductsFilterByName([]);
      setSearchText("");
    }

    setSearchText(name);
    const filteredArray = products.filter((product: any) =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );

    setProductsFilterByName(filteredArray);

    return;
  };

  const modal = (item: any) => {
    setOpenModal(true);
    setModalItem(item);
  };

  const cancelePedido = () => {
    setPedidos([]);
  };

  return (
    <>
      <Navbar
        setSelectedButton={setSelectedButton}
        selectedButton={selectedButton}
      />
      {pay ? (
        <Payment
          pedidos={pedidos}
          setPay={setPay}
          setSelectedButton={setSelectedButton}
          setPedidos={setPedidos}
        />
      ) : selectedButton === "cozinha" ? (
        <Kitchen />
      ) : selectedButton === "retirada" ? (
        <Withdraw />
      ) : (
        <Main>
          {openModal && (
            <ModalItem
              setOpenModal={setOpenModal}
              item={modalItem}
              setPedidos={setPedidos}
            />
          )}
          <div className="container">
            <div className="search-container">
              <h1>Seja bem vindo!</h1>
              <input
                type="text"
                id="search-box"
                placeholder="O que você procura?"
                onChange={(e) => filterProductsByName(e.target.value)}
              />
            </div>

            <div className="searchContainer2">
              <h2>Categorias</h2>
              <span>Navegue por categoria</span>

              <ul>
                <li
                  className={
                    productsCategory === "combos" ? "selected-btn" : ""
                  }
                  onClick={() => filterProductsByCategory("combos")}
                >
                  <img className="img1" src={combo} alt="" />
                  <p>Combos</p>
                </li>
                <li
                  className={
                    productsCategory === "acompanhamentos" ? "selected-btn" : ""
                  }
                  onClick={() => filterProductsByCategory("acompanhamentos")}
                >
                  <img className="img2" src={acompanhamentos} alt="" />
                  <p>Acompanhamentos</p>
                </li>
                <li
                  className={
                    productsCategory === "bebidas" ? "selected-btn" : ""
                  }
                  onClick={() => filterProductsByCategory("bebidas")}
                >
                  <img className="img3" src={bebidas} alt="" />
                  <p>Bebidas</p>
                </li>
                <li
                  className={
                    productsCategory === "sobremesas" ? "selected-btn" : ""
                  }
                  onClick={() => filterProductsByCategory("sobremesas")}
                >
                  <img className="img4" src={sobremesas} alt="" />
                  <p>Sobremesas</p>
                </li>
              </ul>
            </div>

            <div className="products">
              <h2>Produtos</h2>

              <span>Selecione um produto para adicionar ao seu pedido</span>

              <ul>
                {productsCategory !== "" &&
                  productsFilter.map((product: any) => (
                    <li key={product.id} onClick={() => modal(product)}>
                      <CardProducts products={product} />
                    </li>
                  ))}
                {searchText !== "" &&
                  productsFilterByName.map((product: any) => (
                    <li key={product.id} onClick={() => modal(product)}>
                      <CardProducts products={product} />
                    </li>
                  ))}
                {searchText == "" &&
                  productsCategory == "" &&
                  products.map((product: any) => (
                    <li key={product.id} onClick={() => modal(product)}>
                      <CardProducts products={product} />
                    </li>
                  ))}
              </ul>
            </div>

            {pedidos.length > 0 && (
              <>
                <div className="total">
                  <div className="itensTotal">
                    {pedidos.map((pedido: any, index: string) => {
                      const { item, quantity, totalPrice, extras } = pedido;
                      const totalItemPrice = totalPrice * quantity;

                      return (
                        <div className="itens" key={index}>
                          <div className="itenss">
                            <h4>
                              {quantity}x {item.name}
                            </h4>
                            {extras.length > 0 && (
                              <div>
                                <p>{extras.join(", ")}</p>
                              </div>
                            )}
                          </div>
                          <p>
                            {totalItemPrice.toLocaleString("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            })}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="priceTotal">
                    <p>Total do pedido:</p>
                    <p>
                      {pedidos
                        .reduce(
                          (total: any, pedido: any) =>
                            total + pedido.totalPrice * pedido.quantity,
                          0
                        )
                        .toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                    </p>
                  </div>
                </div>
                <div className="buttons">
                  <button onClick={() => cancelePedido()}>Cancelar</button>
                  <button className="final" onClick={() => setPay(true)}>
                    Finalizar o pedido
                  </button>
                </div>
              </>
            )}
          </div>
        </Main>
      )}
    </>
  );
};

export default HomePage;
