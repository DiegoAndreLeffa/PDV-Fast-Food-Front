import styled from "styled-components";

const Main = styled.main`
  margin: 0 auto;

  position: relative;

  .container {
    // padding: 4.375rem 9.375rem;
    background-color: white;

    .search-container {
      input {
        width: 22.5rem;
        height: 2.1875rem;
        border: 0.0625rem solid transparent;
        border-radius: 0.625rem;
        background-color: #f4f4f4;
        padding-left: 0.9375rem;
      }
    }

    .searchContainer2 {
      span {
        cursor: pointer;
      }

      ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        li {
          width: 21.875rem;
          height: 10.9375rem;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          //Efeito top
          // box-shadow: 0rem 2.25rem 3.5625rem 1.1875rem rgba(0, 0, 0, 0.1);
          box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
          border-radius: 1.25rem;
          transition: box-shadow 0.3s ease-in-out;
          cursor: pointer;

          .img1 {
            width: 7.5rem;
          }
          .img2 {
            width: 6.125rem;
          }
          .img3 {
            width: 3.3125rem;
          }
          .img4 {
            width: 8rem;
          }

          p {
            font-size: 1.25rem;
          }
          &:hover {
            box-shadow: 0 0.5rem 0.75rem rgba(0, 0, 0, 0.2);
          }
        }
      }
    }
    .products {
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 3.125rem 6.25rem;
      }
    }

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
    .selected-btn {
      background-color: #e7e7e7;
    }
  }

  @media (max-width: 1440px) {
    .container {
      padding: 0 10px;

      .searchContainer2 {
        ul {
          justify-content: space-evenly;

          li {
            width: 13.875rem;
          }
        }
      }
      .products {
        ul {
          gap: 1.125rem 2.25rem;
        }
      }
      .total {
        width: 90%;
        margin-left: 10px;
      }

      .buttons {
        justify-content: space-evenly;
        padding-top: 0.8125rem;
        padding-bottom: 0.8125rem;
        gap: 0;
        button {
          width: 18.25rem;
          height: 2.75rem;
        }
        .final {
          width: 18.25rem;
          height: 2.75rem;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .container {
      padding: 0 10px;

      .searchContainer2 {
        ul {
          justify-content: flex-start;

          gap: 20px;

          li {
            width: 13.875rem;
          }
        }
      }
      .total {
        width: 90%;
        margin-left: 10px;
      }

      .buttons {
        justify-content: space-evenly;
        padding-top: 0.8125rem;
        padding-bottom: 0.8125rem;
        gap: 0;
        button {
          width: 18.25rem;
          height: 2.75rem;
        }
        .final {
          width: 18.25rem;
          height: 2.75rem;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 10px;

      .searchContainer2 {
        ul {
          justify-content: flex-start;
          flex-wrap: wrap;
          gap: 20px;
        }
      }
      .products {
        ul {
          gap: 2.125rem 0.25rem;
        }
      }

      .total {
        width: 90%;
        margin-left: 10px;
      }

      .buttons {
        justify-content: space-evenly;
        padding-top: 0.8125rem;
        padding-bottom: 0.8125rem;
        gap: 0;
        button {
          width: 18.25rem;
          height: 2.75rem;
        }
        .final {
          width: 18.25rem;
          height: 2.75rem;
        }
      }
    }
  }

  @media (max-width: 425px) {
    .container {
      width: 100%;

      .search-container {
        padding-left: 10px;
      }

      .searchContainer2 {
        width: 100%;
        overflow-x: hidden;
        padding-left: 10px;

        ul {
          width: 95%;
          overflow-x: auto;
          padding-right: 10px;
          flex-wrap: wrap;

          li {
            width: 193px;
            height: 7.9375rem;

            p {
              font-size: 16px;
              // margin: 0;
            }
            .img1 {
              width: 4.5rem;
              height: 3.9375rem;
            }
            .img2 {
              width: 4.5rem;
              height: 4.9375rem;
            }
            .img3 {
              width: 2.5rem;
              height: 3.9375rem;
            }
            .img4 {
              width: 4.5rem;
              height: 4.9375rem;
            }
          }
        }
      }

      .products {
        padding-left: 10px;

        ul {
          gap: 2.125rem 3.25rem;
        }
      }

      .total {
        width: 85%;
        margin-left: 10px;
      }

      .buttons {
        justify-content: space-evenly;
        padding-top: 0.8125rem;
        padding-bottom: 0.8125rem;
        gap: 0;
        button {
          width: 12.25rem;
          height: 2.75rem;
        }
        .final {
          width: 12.25rem;
          height: 2.75rem;
        }
      }
    }
  }
`;

export default Main;
