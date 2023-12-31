import { Cart } from "../MenuActions/Cart/Cart";
import { Location } from "../MenuActions/Location/Location";
import { Header, MenuActionsContainer } from "./Navbar.styles";
import Logo from "../../../../../public/images/Logo.svg";

export function Navbar({cartIsOpen, setCartIsOpen}: any) {



  return (
    <Header>
      <img src={Logo} alt="" />
      <MenuActionsContainer>
        <Location />
        <Cart cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen}/>
      </MenuActionsContainer>
    </Header>
  );
}
