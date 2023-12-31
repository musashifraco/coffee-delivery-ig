
import IcrementIcon from "../../../../../public/icons/increment icon.svg";
import DecrementIcon from "../../../../../public/icons/decrement icon.svg";
import { QuantifierContainer } from "../../../shared/layout/Quantifier/Quantifier.styles";
import { useEffect, useState } from "react";

export function QuantifierOfCard({coffee} : any) {
  const [coffeeQuantity, setCoffeeQuantity] = useState(coffee?.productQuantity)

  function incrementAmountOfCoffee(){
    const coffeeListArray = JSON.parse(
      window.localStorage.getItem("coffeeList") || "[]"
    );

      const newCoffeeListArray = coffeeListArray.map(objeto => {
        if (objeto.id === coffee.id) {
          objeto.productQuantity++
        }
        // Se não for igual, mantém o objeto inalterado
        return objeto;
      })

      window.localStorage.setItem("coffeeList", JSON.stringify(newCoffeeListArray))
    }

    function decrementAmountOfCoffee(){
      const coffeeListArray = JSON.parse(
        window.localStorage.getItem("coffeeList") || "[]"
      );
  
        const newCoffeeListArray = coffeeListArray.map(objeto => {
          if (objeto.id === coffee.id) {
            objeto.productQuantity--
          }
          // Se não for igual, mantém o objeto inalterado
          return objeto;
        })
  
        window.localStorage.setItem("coffeeList", JSON.stringify(newCoffeeListArray))
      }

  function decrement() {
    let countValue = coffeeQuantity;
    --countValue;
    setCoffeeQuantity(countValue)
    decrementAmountOfCoffee()
  }

  function increment() {
    let countValue = coffeeQuantity;
    ++countValue;
    setCoffeeQuantity(countValue)
    incrementAmountOfCoffee()
  }
  return (
    <QuantifierContainer>
      {coffeeQuantity != 0 ? (
        <button onClick={decrement}>
          <img src={DecrementIcon} alt="" />
        </button>
      ) : (
        <button>
          <img src={DecrementIcon} alt="" />
        </button>
      )}
      <span>{coffeeQuantity}</span>
      <button onClick={increment}>
        <img src={IcrementIcon} alt="" />
      </button>
    </QuantifierContainer>
  );
}
