import { Cart } from "../MenuActions/Cart/Cart";
import { Location } from "../MenuActions/Location/Location";
import { Header, MenuActionsContainer } from "./Navbar.styles";
import Logo from "../../../../../public/Logo.svg";

export function Navbar() {
  return (
    <Header>
      <img src={Logo} alt="" />
      <MenuActionsContainer>
        <Location />
        <Cart />
      </MenuActionsContainer>
    </Header>
  );
}
