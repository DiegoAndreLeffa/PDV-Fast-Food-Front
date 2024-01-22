import styled from "styled-components";

const PaymentStyled = styled.main`
  padding: 5rem 8.125rem;
  background-color: white;

  .title {
    display: flex;
    align-items: center;
    gap: 0.9375rem;
    font-size: 1.25rem;
    color: green;

    h3 {
      color: Black;
    }
  }
  .container {
    display: flex;
    justify-content: space-between;
  }
  .totalprice {
    width: 50%;
    height: 28.125rem;
    display: flex;
    gap: 0.9375rem;
    flex-direction: column;
    .total {
      border: 0.0625rem solid #d1d1d1;
      border-radius: 1.25rem;
      padding: 1.25rem;

      .itensTotal {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        border-bottom: 0.125rem dashed #d1d1d1;

        .itens {
          display: flex;
          flex-direction: row;

          margin-bottom: 0.625rem;
          gap: 0.625rem;
          justify-content: space-between;

          h4 {
            margin: 0;
          }
          p {
            margin: 0;
          }
          .itenss {
            display: flex;
            flex-direction: column;
            gap: 0.625rem;
          }

          div {
          }
        }
      }
      .priceTotal {
        font-size: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.625rem;
        padding-top: 0.625rem;
        p {
          margin: 0;
        }
      }
    }
    .infoClient {
      display: flex;
      justify-content: space-between;

      .name {
        display: flex;
        flex-direction: column;
        gap: 0.3125rem;

        input {
          width: 25rem;
          height: 2.8125rem;
          border: 0.0625rem solid transparent;
          border-radius: 0.5rem;
          background-color: #f4f4f4;
          padding: 0.3125rem 0.625rem;
        }
      }
      .code {
        display: flex;
        flex-direction: column;
        gap: 0.3125rem;

        input {
          width: 6.25rem;
          height: 2.8125rem;
          border: 0.0625rem solid transparent;
          border-radius: 0.5rem;
          background-color: #f4f4f4;
          padding: 0.3125rem 0.625rem;
          font-size: 1.375rem;
        }
      }
    }
  }
  .payMode {
    width: 37.5rem;
    height: 25rem;

    .modes {
      display: flex;
      flex-direction: column;
      gap: 0.625rem;

      .modesType {
        border: 0.0625rem solid grey;
        padding: 0.9375rem 1.875rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 0.5rem;

        div {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          font-size: 1.125rem;
          color: green;

          p {
            color: black;
          }
        }
      }
    }
    .valores {
      display: flex;
      margin-top: 0.9375rem;
      justify-content: space-between;

      div {
        display: flex;
        flex-direction: column;
        gap: 0.625rem;

        input {
          width: 16.25rem;
          height: 2.5rem;
          border: 0.0625rem solid transparent;
          border-radius: 0.5rem;
          background-color: #f4f4f4;
          padding: 0.3125rem 0.625rem;
        }
      }
    }
  }
  .buttons {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 2.8125rem;
    padding-top: 2.8125rem;
    .final {
      width: 21.25rem;
      height: 3.75rem;
      border: 0.125rem solid green;
      border-radius: 1.25rem;
      background-color: green;
      color: #fff;
      font-size: 1.25rem;
      cursor: pointer;
    }

    button {
      width: 21.25rem;
      height: 3.75rem;
      border: 0.125rem solid green;
      border-radius: 1.25rem;
      font-size: 1.25rem;
      color: green;
      background-color: white;
      cursor: pointer;
    }
  }

  @media (max-width: 1440px) {
    form {
      .container {
        gap: 10px;
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 5rem 2.125rem;

    form {
      .container {
        gap: 10px;

        .totalprice {
          width: 50%;

          .infoClient {
            .name {
              input {
                width: 12rem;
              }
            }
          }
        }
        .payMode {
          width: 50%;

          .valores {
            input {
              width: 9.25rem;
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 5rem 2.125rem;

    form {
      .container {
        gap: 10px;

        .totalprice {
          width: 50%;
          // height: 20.125rem;

          .infoClient {
            .name {
              input {
                width: 12rem;
              }
            }
          }
        }
        .payMode {
          width: 50%;

          .valores {
            input {
              width: 9.25rem;
            }
          }
        }
      }
    }
  }

  @media (max-width: 425px) {
    padding: 0;

    form {
      padding: 20px 10px;
    }
    .container {
      flex-direction: column;

      .totalprice {
        width: 100%;
        height: 20.125rem;

        .infoClient {
          .name {
            input {
              width: 15rem;
            }
          }
        }
      }

      .payMode {
        width: 100%;
        height: 26rem;

        .valores {
          input {
            width: 10.25rem;
          }
        }
      }
    }
  }
`;

export default PaymentStyled;
