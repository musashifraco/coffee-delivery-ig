import { CartContainer } from "./Cart.styles";
import CartImage from "../../../../../../public/Car.svg";

export function Cart() {
  return (
    <CartContainer>
      <img src={CartImage} alt="" />
    </CartContainer>
  );
}
