import { useEffect, useState } from "react";
import { CoffeeCard } from "../../../shared/layout/CoffeeCard/CoffeeCard";
import { CoffeeListContainer, List } from "./CoffeeList.style";
import { getMockCoffees } from "./Mocks";

interface CoffeeProps {
  id: number;
  url: string;
  tag: string;
  title: string;
  description: string;
  price: number;
}

export function CoffeeList() {
  const [coffees, setCoffees] = useState<Array<CoffeeProps> | []>([]);

  useEffect(() => {
    const mockCoffees = getMockCoffees();
    setCoffees(mockCoffees);
  }, [coffees]);

  return (
    <CoffeeListContainer>
      <h2>Nossos Cafés</h2>
      <List>
        { coffees?.map((coffee) => (
          <div key={coffee?.id}>
            <CoffeeCard coffee={coffee}/>
          </div>
        ))}
      </List>
    </CoffeeListContainer>
  );
}
