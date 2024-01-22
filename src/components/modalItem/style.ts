import styled from "styled-components";
import backimg from "../../assets/83bc0efb04998ca9dba60d506dafd488.jpg";

const ModalItemStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0rem;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.7);

  .modalBody {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 1.25rem;
    width: 45%;
    height: auto;
    border-radius: 1.25rem;

    border-radius: 1.25rem;

    .title {
      font-size: 1.875rem;
      display: flex;
      justify-content: space-between;

      p {
        margin: 0.625rem 0;
        font-size: 1.625rem;
      }
      div {
        cursor: pointer;
      }
    }
    .info {
      display: flex;
      margin-bottom: 0.9375rem;
    }
    .infoItem {
      width: 80%;
      padding: 0 2.5rem;
      display: flex;
      flex-direction: column;
    }
    .counter {
      display: flex;
      width: 9.375rem;
      height: 2.8125rem;

      justify-content: space-between;
      align-items: center;

      .btn {
        width: 2.8125rem;
        height: 2.8125rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: green;
        border-radius: 2.5rem;
        color: white;
        cursor: pointer;
      }

      p {
        font-size: 1.25rem;
      }
    }
    .divImg {
      width: 18.125rem;
      height: 9.9375rem;
      border: 0rem solid transparent;
      border-radius: 0.625rem;

      box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
      background-image: url(${backimg});
      background-repeat: round;

      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      div {
        width: 100%;
        height: 5rem;
        background-color: #fff;
        border-radius: 0.5625rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .img {
          width: 6.25rem;
          height: 0.3125rem;
          position: relative;
          img {
            position: absolute;
            bottom: 0rem;
            width: 6.25rem;
            height: 6.875rem;
            border-radius: 0.3125rem;
          }
        }
      }
    }

    .extras {
      h3 {
        margin: 0.625rem 0;
      }

      ul {
        padding-left: 1.25rem;
      }

      li {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1.25rem;

        .extraImg {
          width: 4.375rem;
          height: 4.375rem;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 0.0625rem px solid transparent;
          border-radius: 0.625rem;
          box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);

          img {
            width: 90%;
          }
        }
        .infoExtras {
          width: 70%;
          h4 {
            margin: 0.625rem 0;
          }
          p {
            margin: 0.625rem 0;
          }
          div {
            width: 3.625rem;
          }
        }
        .cr-wrapper {
          input {
            width: 1.875rem;
            height: 1.875rem;
            appearance: none;
            border-radius: 50%;
            border: 0.125rem solid #125c13;
            outline: none;
            cursor: pointer;

            &:focus {
              box-shadow: 0 0 0.3125rem #125c13;
            }

            &:checked {
              background-color: #125c13;
              border: 0.125rem solid #125c13;
            }

            &:checked:focus {
              box-shadow: 0 0 0.3125rem #fff;
            }
          }
        }
      }
    }
    .obs {
      h3 {
        margin: 0.625rem 0;
      }
      textarea {
        width: 95%;
        height: 4.375rem;
        border: 0.0625rem solid transparent;
        background-color: #f4f4f4;
        border-radius: 1.25rem;
        resize: none;
        padding: 1.25rem;
      }
      margin-bottom: 0.9375rem;
    }
    .total {
      border: 0.0625rem solid #d1d1d1;
      border-radius: 1.25rem;
      padding: 0 1.25rem 0.625rem;

      .itensTotal {
        display: flex;
        justify-content: space-between;
        border-bottom: 0.125rem dashed #d1d1d1;

        div {
          display: flex;
          flex-direction: column;
          font-size: 1.125rem;
          p {
            margin: 0.625rem 0;
          }

          div {
            font-size: 1rem;
          }
        }
        p {
          margin: 0.625rem 0;
        }
      }
      .priceTotal {
        font-size: 1.125rem;
        display: flex;
        flex-direction: column;
        gap: 0.3125rem;
        padding-top: 0.625rem;
        p {
          margin: 0;
        }
      }
    }
    .buttons {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      gap: 2.8125rem;
      padding-top: 0.9375rem;
      .final {
        width: 21.25rem;
        height: 3.125rem;
        border: 0.125rem solid green;
        border-radius: 1.25rem;
        background-color: green;
        color: #fff;
        font-size: 1.25rem;
        cursor: pointer;
      }

      button {
        width: 21.25rem;
        height: 3.125rem;
        border: 0.125rem solid green;
        border-radius: 1.25rem;
        font-size: 1.25rem;
        color: green;
        background-color: white;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 1024px) {
    .modalBody {
      width: 85%;
      .extras {
        h3 {
          margin: 0;
        }
        ul {
          padding-left: 0.25rem;
          overflow-y: scroll;
          height: 85px;
          li {
            gap: 0.25rem;
          }
        }
      }

      .obs {
        textarea {
          width: 93%;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .modalBody {
      width: 85%;
      .extras {
        h3 {
          margin: 0;
        }
        ul {
          padding-left: 0.25rem;
          overflow-y: scroll;
          height: 85px;
          li {
            gap: 0.25rem;
          }
        }
      }

      .obs {
        textarea {
          width: 93%;
        }
      }
    }
  }

  @media (max-width: 425px) {
    .modalBody {
      width: 83%;

      .title {
        font-size: 1px;
      }
      .info {
        .divImg {
          width: 13.125rem;
          height: 8.9375rem;

          div {
            width: 100%;
            height: 4rem;
          }
          .img {
            width: 6.25rem;
            height: 0.3125rem;
            position: relative;
          }
        }

        .infoItem {
          padding: 0 0.5rem;
          gap: 20px;
          h3 {
            margin: 0;
          }
          p {
            margin: 0;
          }
        }
      }
      .extras {
        h3 {
          margin: 0;
        }
        ul {
          padding-left: 0.25rem;
          overflow-y: scroll;
          height: 85px;
          li {
            gap: 0.25rem;
          }
        }
      }
      .obs {
        margin-bottom: 3px;
        h3 {
          margin: 0;
        }
        textarea {
          width: 88%;
        }
      }

      .buttons {
        gap: 10px;
        button {
          font-size: 16px;
        }
        .final {
          font-size: 16px;
        }
      }
    }
  }
`;

export default ModalItemStyle;
