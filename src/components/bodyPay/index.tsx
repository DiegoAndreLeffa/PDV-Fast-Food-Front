import { FaCreditCard } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa6";
import { FaMoneyBillAlt } from "react-icons/fa";
import PaymentStyled from "./style";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ModalFinalOrder } from "..";

interface OrderItem {
  item: {
    name: string;
    img: string;
  };
  quantity: number;
  totalPrice: number;
  extras: string[];
}

interface PedidoResumido {
  name: string;
  quantity: number;
  extras: string[];
}

interface OrderObj {
  codigo: number;
  nome: string;
  itens: PedidoResumido[];
  valorEntregue: string;
  troco: string;
  primeiraImagem: string;
}

interface PaymentProps {
  pedidos: OrderItem[];
  setPay: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedButton: React.Dispatch<React.SetStateAction<string>>;
  setPedidos: React.Dispatch<React.SetStateAction<OrderItem[]>>;
}

const Payment: React.FC<PaymentProps> = ({
  pedidos,
  setPay,
  setSelectedButton,
  setPedidos,
}) => {
  const [codigo, setCodigo] = useState<number>(1);
  const [valorEntregue, setValorEntregue] = useState<string>("");
  const [troco, setTroco] = useState<number>(0);
  const [modoPagamento, setModoPagamento] = useState<boolean>(false);
  const [nomeCliente, setNomeCliente] = useState<string>("");
  const [openModalPedido, setOpenModalPedido] = useState<boolean>(false);

  const incrementCodigo = () => {
    setCodigo((codigo) => codigo + 1);
  };

  const calcularTroco = () => {
    const totalPedido =
      pedidos.reduce(
        (total, pedido) => total + pedido.totalPrice * pedido.quantity,
        0
      ) || 0;

    const valorEntregueFloat =
      parseFloat(valorEntregue.replace("R$", "").replace(",", ".")) || 0;

    setTroco(valorEntregueFloat > 0 ? valorEntregueFloat - totalPedido : 0);
  };

  useEffect(() => {
    const cartCode = async () => {
      const resCart = await api.get(`/cart`);

      const maxCode = Math.max(...resCart.data.map((cart: any) => cart.codigo));

      if (resCart.data.length >= 0) {
        setCodigo(1);
        return;
      }
      setCodigo(maxCode + 1);
    };
    calcularTroco();
    cartCode();
  }, [valorEntregue, pedidos, codigo]);

  const finalPedido = async (e: any) => {
    e.preventDefault();

    if (!nomeCliente || !valorEntregue || troco < 0) {
      alert("Preencha todos os campos obrigatórios corretamente.");
      return;
    }

    incrementCodigo();

    const pedidosResumidos = pedidos.map((pedido) => {
      const { item, quantity, extras } = pedido;
      return {
        name: item.name,
        quantity,
        extras,
      };
    });

    const primeiraImagem =
      pedidos.length > 0 ? pedidos[0].item.img + ".png" : "";

    const pedidoObj: OrderObj = {
      codigo,
      nome: nomeCliente,
      itens: pedidosResumidos,
      valorEntregue,
      troco: `R$ ${troco.toFixed(2)}`,
      primeiraImagem,
    };

    try {
      await api.post(`/cart`, pedidoObj);

      setOpenModalPedido(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PaymentStyled>
      {openModalPedido && (
        <ModalFinalOrder
          setOpenModalPedido={setOpenModalPedido}
          setSelectedButton={setSelectedButton}
          setPay={setPay}
          setPedidos={setPedidos}
        />
      )}
      <form action="">
        <div className="title">
          <FaWallet className="img1"></FaWallet>
          <h3>Pagamento</h3>
        </div>
        <div className="container">
          <div className="totalprice">
            <div>
              <p>Resumo da compra</p>
            </div>

            <div className="total">
              <div className="itensTotal">
                {pedidos.map((pedido, index) => {
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
                      (total, pedido) =>
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
            <div className="infoClient">
              <div className="name">
                <label>Nome do cliente</label>
                <input
                  type="text"
                  placeholder="Nome do cliente"
                  value={nomeCliente}
                  onChange={(e) => setNomeCliente(e.target.value)}
                  required={true}
                />
              </div>
              <div className="code">
                <label>Código</label>
                <input type="number" disabled={true} value={codigo} />
              </div>
            </div>
          </div>
          <div className="payMode">
            <div>
              <p>Selecione aforma de pagamento:</p>
            </div>

            <div className="modes">
              <div className="modesType">
                <div>
                  <FaCreditCard></FaCreditCard>
                  <p>Débito</p>
                </div>
                <input type="checkbox" name="" id="" />
              </div>
              <div className="modesType">
                <div>
                  <FaCreditCard></FaCreditCard>
                  <p>Crédito</p>
                </div>
                <input type="checkbox" name="" id="" />
              </div>
              <div className="modesType">
                <div>
                  <FaMoneyBillAlt></FaMoneyBillAlt>
                  <p>Dinheiro</p>
                </div>
                <input
                  type="checkbox"
                  name="modoPagamento"
                  id="dinheiro"
                  onChange={() => setModoPagamento(!modoPagamento)}
                />
              </div>
            </div>
            {modoPagamento && (
              <div className="valores">
                <div>
                  <label>Valor entregue</label>
                  <input
                    type="text"
                    value={valorEntregue}
                    onChange={(e) => setValorEntregue(e.target.value)}
                    onBlur={() => {
                      if (!valorEntregue.startsWith("R$")) {
                        setValorEntregue(`R$ ${valorEntregue}`);
                      }
                    }}
                    placeholder="R$"
                    required={true}
                  />
                </div>
                <div>
                  <label>Troco</label>
                  <input
                    type="text"
                    value={"R$ " + troco || "R$ " + 0}
                    readOnly
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="buttons">
          <button onClick={() => setPay(false)}>Cancelar</button>
          <button
            type="submit"
            className="final"
            onClick={(e) => finalPedido(e)}
          >
            Finalizar o pedido
          </button>
        </div>
      </form>
    </PaymentStyled>
  );
};

export default Payment;
