import { CoffeCardContainer } from "./CoffeeCard.styles";
import CoffeDefault from "../../../../../public/coffe-images/expresso-tradicional.jpg";
import { Quantifier } from "../Quantifier/Quantifier";
import ShoppingCartSimple from "../../../../../public/icons/ShoppingCartSimple.svg";

export function CoffeeCard() {
  return (
    <CoffeCardContainer>
      <img src={CoffeDefault} alt="" />
      <p>TRADICIONAL</p>
      <div className="card-text-container">
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </div>
      <div className="purchase-container">
        <p>
          R$ <strong>9,90</strong>
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
