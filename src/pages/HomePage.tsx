import { CartContainer } from "../components/pages/home/Cart/CartContainer";
import { Intro } from "../components/pages/home/Intro/Intro";
import { Navbar } from "../components/shared/navigation/Navbar/Navbar";

export function HomePage() {
  return (
    <>
      <Navbar />
      <Intro />
      {/* 

      <CoffeeList /> 
      <CoffeeList />
      <ConfirmedOrderSection />
      */}
      <CartContainer />
    </>
  );
}
