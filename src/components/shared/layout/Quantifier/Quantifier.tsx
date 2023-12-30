import { QuantifierContainer } from "./Quantifier.styles";
import IcrementIcon from "../../../../../public/icons/increment icon.svg";
import DecrementIcon from "../../../../../public/icons/decrement icon.svg";
import { useState } from "react";

export function Quantifier() {
  const [count, setCount] = useState(0);

  function decrement() {
    let countValue = count;
    --countValue;
    setCount(countValue);
  }

  function increment() {
    let countValue = count;
    ++countValue;
    setCount(countValue);
  }

  console.log(count);
  return (
    <QuantifierContainer>
      {count != 0 ? (
        <button onClick={decrement}>
          <img src={DecrementIcon} alt="" />
        </button>
      ) : (
        <button>
          <img src={DecrementIcon} alt="" />
        </button>
      )}
      <span>1</span>
      <button onClick={increment}>
        <img src={IcrementIcon} alt="" />
      </button>
    </QuantifierContainer>
  );
}
