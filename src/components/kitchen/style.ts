import styled from "styled-components";

const KitchenStyle = styled.main`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 135px;
    h3 {
    }

    .cartPrepar {
      width: 700px;
      height: 700px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .list {
        padding-left: 35px;

        ul {
          overflow: auto;
          li {
            display: flex;
            justify-content: space-between;
            gap: 20px;

            width: 440px;
            box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
            padding: 15px;
            border-radius: 20px;

            .infoBody {
              display: flex;
              gap: 20px;

              .img {
                width: 70px;

                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                align-content: center;
                box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
                padding: 10px;
                border-radius: 20px;
                img {
                  width: 100%;
                }
              }
              .info {
                display: flex;
                flex-direction: column;

                .infoName {
                  font-weight: bold;
                  font-size: 20px;
                  margin: 0;
                }

                p {
                  margin: 0;
                  font-size: 14px;
                }
              }
            }
            .buttons {
              display: flex;
              align-content: center;
              flex-direction: row;
              justify-content: space-around;
              flex-wrap: wrap;
              width: 100px;

              .x {
                background-color: #ff6b6b5e;
                padding: 10px;
                border-radius: 10px;
                color: #f72020;
                width: 20px;
                height: 20px;
                &:hover {
                  cursor: pointer;
                  background-color: #ff6b6bbd;
                }
              }

              .v {
                background-color: #00a0064d;
                padding: 10px;
                border-radius: 10px;
                color: #00a006;
                width: 20px;
                height: 20px;
                &:hover {
                  cursor: pointer;
                  background-color: #00a0068f;
                }
              }
            }
          }
        }
      }
      .obs {
        width: 460px;
        height: 150px;

        padding-left: 35px;
        p {
          font-weight: bold;
        }

        .text {
          width: 400px;
          height: 80px;

          border: 1px solid grey;
          border-radius: 10px;
        }
      }
    }

    .final {
      border-left: 2px solid green;
      width: 700px;
      height: 700px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-left: 110px;

      .list {
        padding-left: 35px;

        ul {
          overflow: auto;
          li {
            display: flex;
            justify-content: space-between;
            gap: 20px;

            width: 440px;
            box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
            padding: 15px;
            border-radius: 20px;
            border: 1px solid green;

            .infoBody {
              display: flex;
              gap: 20px;

              .img {
                width: 70px;

                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                align-content: center;
                box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
                padding: 10px;
                border-radius: 20px;
                img {
                  width: 100%;
                }
              }
              .info {
                display: flex;
                flex-direction: column;

                .infoName {
                  font-weight: bold;
                  font-size: 20px;
                  margin: 0;
                }

                p {
                  margin: 0;
                  font-size: 14px;
                }
              }
            }
            .buttons {
              display: flex;
              align-content: center;
              flex-direction: row;
              justify-content: space-around;
              flex-wrap: wrap;
              width: 100px;

              .x {
                background-color: #ff6b6b5e;
                padding: 10px;
                border-radius: 10px;
                color: #f72020;
                width: 20px;
                height: 20px;
                &:hover {
                  cursor: pointer;
                  background-color: #ff6b6bbd;
                }
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .container {
      padding: 60px 60px;
      gap: 40px;
      .cartPrepar {
        width: 50%;
        // height: 580px;
        .list {
          padding: 0;
          ul {
            li {
              width: 410px;
              margin-left: 5px;
            }
          }
        }
        .obs {
          padding: 0;
          width: 95%;
          .text {
            width: 100%;
          }
        }
      }
      .final {
        width: 50%;
        padding: 0 0 0 20px;

        .list {
          padding: 0;
          ul {
            li {
              width: 300px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    .cartPrepar {
      width: 700px;
      height: 580px;
      .list {
        padding: 0;
        ul {
          li {
            width: 620px;
            margin-left: 5px;
          }
        }
      }
      .obs {
        padding: 0;
        width: 95%;
        .text {
          width: 100%;
        }
      }
    }
    .final {
      height: 402px;
      padding: 0;
      border-top: 2px solid green;
      border-left: none;
      .list {
        padding: 0;
        ul {
          li {
            width: 630px;
          }
        }
      }
    }
  }

  @media (max-width: 425px) {
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
`;

export default KitchenStyle;
