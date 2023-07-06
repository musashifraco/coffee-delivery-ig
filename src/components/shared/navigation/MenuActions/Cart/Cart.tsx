import { CartContainer } from "./Cart.styles";
import CartImage from "../../../../../../public/icons/Car.svg";

export function Cart() {
  return (
    <CartContainer>
      <img src={CartImage} alt="" />
    </CartContainer>
  );
}
