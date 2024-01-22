import styled from "styled-components";

const WithdrawStyle = styled.main`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3.75rem 8.4375rem;
    h3 {
    }

    .cartPrepar {
      width: 43.75rem;
      height: 43.75rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .list {
        padding-left: 2.1875rem;

        ul {
          overflow: auto;
          li {
            p {
              font-size: 50px;
              font-weight: bold;
              color: grey;
            }
          }
        }
      }
    }

    .final {
      border-left: 0.125rem solid green;
      width: 43.75rem;
      height: 43.75rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-left: 6.875rem;

      .list {
        padding-left: 2.1875rem;

        ul {
          overflow: auto;
          li {
            p {
              font-size: 3.125rem;
              font-weight: bold;
              color: green;
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1.75rem 3.4375rem;
    .container {
      padding: 0;

      .cartPrepar {
        padding: 0;
      }

      .final {
        padding: 0;
      }
    }
  }

  @media (max-width: 425px) {
    .container {
      flex-direction: column;
      padding: 0;

      .cartPrepar {
        width: 402px;
        height: 583px;

        .list {
          padding: 0;
          ul {
            li {
              width: 365px;
            }
          }
        }
        .obs {
          padding: 0;
        }
      }

      .final {
        width: 402px;
        height: 445px;
        padding: 0;
        border-top: 2px solid green;
        border-left: none;
        .list {
          padding: 0;
          ul {
            li {
              width: 365px;
            }
          }
        }
      }
    }
  }
`;

export default WithdrawStyle;
