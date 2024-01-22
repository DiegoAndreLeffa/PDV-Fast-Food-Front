import CardContainer from "./style";

const CardProducts = ({ products }: any) => {
  const formattedPrice = Number(products.price).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <CardContainer>
      <div className="info">
        <div className="img">
          <img src={products.img + ".png"} alt={products.name} />
        </div>
        <div className="margin">
          <p>{products.name}</p>
          <div>
            <span>{products.description}</span>
          </div>
          <p>{formattedPrice}</p>
        </div>
      </div>
    </CardContainer>
  );
};

export default CardProducts;
