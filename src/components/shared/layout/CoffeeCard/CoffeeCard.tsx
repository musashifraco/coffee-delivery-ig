import { CoffeCardContainer } from "./CoffeeCard.styles";
import { Quantifier } from "../Quantifier/Quantifier";
import ShoppingCartSimple from "../../../../../public/icons/ShoppingCartSimple.svg";

export interface CoffeeProps {
  id: number;
  url: string;
  tag: string;
  title: string;
  description: string;
  price: number;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  return (
    <CoffeCardContainer>
      <img src={coffee.url} alt="" />
      <p>{coffee.tag}</p>
      <div className="card-text-container">
        <h3>{coffee.title}</h3>
        <p>{coffee.description}</p>
      </div>
      <div className="purchase-container">
        <p>
          R$ <strong>{coffee.price}</strong>
        </p>
        <div className="increment-and-decrement">
          <Quantifier />
          <div className="ShoppingCartSimple-Container">
            <img src={ShoppingCartSimple} alt="" />
          </div>
        </div>
      </div>
    </CoffeCardContainer>
  );
}
