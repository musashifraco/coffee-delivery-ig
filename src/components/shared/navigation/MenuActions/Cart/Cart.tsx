import { CartContainer } from "./Cart.styles";
import CartImage from "../../../../../../public/icons/Car.svg";

export function Cart({cartIsOpen, setCartIsOpen}: any) {
  function handleSetCartIsOpen() {
    if(cartIsOpen === false) {
      setCartIsOpen(true)
    } else {
      setCartIsOpen(false)
    }
  }
  return (
    <CartContainer onClick={handleSetCartIsOpen}>
      <img src={CartImage} alt="" />
    </CartContainer>
  );
}
