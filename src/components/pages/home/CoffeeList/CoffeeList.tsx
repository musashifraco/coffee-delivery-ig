import { CoffeeCard } from "../../../shared/layout/CoffeeCard/CoffeeCard";
import { CoffeeListContainer, List } from "./CoffeeList.style";

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos Cafés</h2>
      <List>
        <div>
          <CoffeeCard />
        </div>
        <div>
          <CoffeeCard />
        </div>
        <div>
          <CoffeeCard />
        </div>
        <div>
          <CoffeeCard />
        </div>
        <div>
          <CoffeeCard />
        </div>
        <div>
          <CoffeeCard />
        </div>
        <div>
          <CoffeeCard />
        </div>
        <div>
          <CoffeeCard />
        </div>
        <div>
          <CoffeeCard />
        </div>
        <div>
          <CoffeeCard />
        </div>
        <div>
          <CoffeeCard />
        </div>
        <div>
          <CoffeeCard />
        </div>
        <div>
          <CoffeeCard />
        </div>
        <div>
          <CoffeeCard />
        </div>
      </List>
    </CoffeeListContainer>
  );
}
