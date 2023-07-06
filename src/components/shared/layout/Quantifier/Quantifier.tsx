import { QuantifierContainer } from "./Quantifier.styles";
import IcrementIcon from "../../../../../public/icons/increment icon.svg";
import DecrementIcon from "../../../../../public/icons/decrement icon.svg";

export function Quantifier() {
  return (
    <QuantifierContainer>
      <button>
        <img src={IcrementIcon} alt="" />
      </button>
      <span>1</span>
      <button>
        <img src={DecrementIcon} alt="" />
      </button>
    </QuantifierContainer>
  );
}
