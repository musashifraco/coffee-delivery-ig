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
    const coffeeList = window.localStorage.getItem("coffeeList");

    if (coffeeList === null) {
      const coffeeListArray = [];
      const order = {
        id: coffee.id,
        coffeeObject: coffee,
        productQuantity: quantity,
      };

      coffeeListArray.push(order);

      window.localStorage.setItem(
        "coffeeList",
        JSON.stringify(coffeeListArray)
      );
    } else {
      const coffeeListArray = JSON.parse(
        window.localStorage.getItem("coffeeList") || "[]"
      );
      const order = coffeeListArray.filter(
        (element) => element.id === coffee.id
      );

      if (order.length === 0) {
          const newOrder = {
            id: coffee.id,
            coffeeObject: coffee,
            productQuantity: quantity,
          };
          
          coffeeListArray.push(newOrder)

          window.localStorage.setItem("coffeeList", JSON.stringify(coffeeListArray))
      } else {
        const newCoffeeListArray = coffeeListArray.map(objeto => {
          if (objeto.id === coffee.id) {
            objeto.productQuantity += quantity
          }
          // Se não for igual, mantém o objeto inalterado
          return objeto;
        })

        window.localStorage.setItem("coffeeList", JSON.stringify(newCoffeeListArray))
      }
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
