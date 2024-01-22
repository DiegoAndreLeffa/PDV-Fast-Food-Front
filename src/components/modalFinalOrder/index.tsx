import imgModal from "../../assets/imgModal.jpg";
import { IoClose } from "react-icons/io5";
import ModalPedidoStyle from "./style";
import { FC } from "react";

interface ModalFinalOrderProps {
  setOpenModalPedido: (value: React.SetStateAction<boolean>) => void;
  setSelectedButton: (value: React.SetStateAction<string>) => void;
  setPay: (value: React.SetStateAction<boolean>) => void;
  setPedidos: (value: React.SetStateAction<any[]>) => void;
}

const ModalFinalOrder: FC<ModalFinalOrderProps> = ({
  setOpenModalPedido,
  setSelectedButton,
  setPay,
  setPedidos,
}) => {
  const closeModal = () => {
    setSelectedButton("cozinha");
    setOpenModalPedido(false);
    setPay(false);
    setPedidos([]);
  };
  return (
    <ModalPedidoStyle>
      <div className="modalBody">
        <div className="close">
          <IoClose
            style={{ width: "30px", height: "30px" }}
            onClick={() => closeModal()}
          />
        </div>
        <img src={imgModal} alt="" />

        <div className="text">
          <p>O pedido foi encaminhado para a cozinha.</p>
        </div>
      </div>
    </ModalPedidoStyle>
  );
};

export default ModalFinalOrder;
