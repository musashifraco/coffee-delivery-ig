import { QuantifierContainer } from "./Quantifier.styles";
import IcrementIcon from "../../../../../public/icons/increment icon.svg";
import DecrementIcon from "../../../../../public/icons/decrement icon.svg";

export function Quantifier({quantity, setQuantity} : any) {

  function decrement() {
    let countValue = quantity;
    --countValue;
    setQuantity(countValue);
  }

  function increment() {
    let countValue = quantity;
    ++countValue;
    setQuantity(countValue);
  }
  return (
    <QuantifierContainer>
      {quantity != 0 ? (
        <button onClick={decrement}>
          <img src={DecrementIcon} alt="" />
        </button>
      ) : (
        <button>
          <img src={DecrementIcon} alt="" />
        </button>
      )}
      <span>{quantity}</span>
      <button onClick={increment}>
        <img src={IcrementIcon} alt="" />
      </button>
    </QuantifierContainer>
  );
}
