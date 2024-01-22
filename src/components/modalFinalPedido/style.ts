import styled from "styled-components";

const ModalPedidoStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0px;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.7);

  .modalBody {
    .close {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      cursor: pointer;
    }

    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.25rem;
    border-radius: 20px;

    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 425px) {
    .modalBody {
      img {
        width: 365px;
      }
    }
  }
`;

export default ModalPedidoStyle;
