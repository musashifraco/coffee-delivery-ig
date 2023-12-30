import { CoffeCardContainer } from "./CoffeeCard.styles";
import { Quantifier } from "../Quantifier/Quantifier";
import ShoppingCartSimple from "../../../../../public/icons/ShoppingCartSimple.svg";
import { useEffect, useState } from "react";

export interface CoffeeProps {
  id: number;
  url: string;
  tag: string;
  title: string;
  description: string;
  price: number;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(0);

  function createCoffeeOnLocalStorage() {
    const item = window.localStorage.getItem(`${coffee.id}`);

    if (item === null) {
      const order = {
        coffeeObject: coffee,
        productQuantity: quantity,
      };
      window.localStorage.setItem(`${coffee.id}`, JSON.stringify(order));
    } else {
      const orderStored = JSON.parse(
        window.localStorage.getItem(`${coffee.id}`) || "{}"
      );

      orderStored.productQuantity += quantity;

      window.localStorage.setItem(`${coffee.id}`, JSON.stringify(orderStored));
    }
  }

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
          <Quantifier quantity={quantity} setQuantity={setQuantity} />
          {quantity !== 0 ? (
            <button
              className="ShoppingCartSimple-Container"
              onClick={createCoffeeOnLocalStorage}
            >
              <img src={ShoppingCartSimple} alt="" />
            </button>
          ) : (
            <button className="ShoppingCartSimple-Container">
              <img src={ShoppingCartSimple} alt="" />
            </button>
          )}
        </div>
      </div>
    </CoffeCardContainer>
  );
}
