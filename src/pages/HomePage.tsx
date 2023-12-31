import { useState } from "react";
import { CartContainer } from "../components/pages/home/Cart/CartContainer";
import { CoffeeList } from "../components/pages/home/CoffeeList/CoffeeList";
import { Intro } from "../components/pages/home/Intro/Intro";
import { Navbar } from "../components/shared/navigation/Navbar/Navbar";

export function HomePage() {
  const [cartIsOpen, setCartIsOpen] = useState(false)
  return (
    <>
      <Navbar cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen}/>
      
      {!cartIsOpen &&  (<><Intro /><CoffeeList /></>)}
      {cartIsOpen && <CartContainer />}

    </>
  );
}
