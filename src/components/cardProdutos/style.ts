import styled from "styled-components";
import backimg from "../../assets/83bc0efb04998ca9dba60d506dafd488.jpg";

const CardContainer = styled.div`
  width: 240px;
  height: 290px;
  border: 0px solid transparent;
  border-radius: 10px;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  background-image: url(${backimg});
  background-repeat: round;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  .info {
    width: 240px;
    height: 190px;
    background-color: #fff;
    border-radius: 9px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .img {
      width: 100px;
      height: 5px;
      position: relative;
      img {
        position: absolute;
        bottom: 0px;
        width: 110px;
        height: 110px;
        border-radius: 5px;
      }
    }

    .margin {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      p {
        font-size: 18px;
        font-weight: 700;
      }

      div {
        width: 190px;
        display: flex;
        text-align: center;
        justify-content: center;
        span {
          font-size: 14px;
        }
      }
    }
  }

  @media (max-width: 425px) {
    width: 169px;
    height: 250px;

    .info {
      width: 169px;
      height: 143px;

      .margin {
        p {
          font-size: 16px;
          font-weight: 700;
        }
        div {
          width: 170px;
          span {
            font-size: 12px;
          }
        }
      }
    }
  }
`;

export default CardContainer;
