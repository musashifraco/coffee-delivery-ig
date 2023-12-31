import { CImage } from "@coreui/react";
import { Form } from "../Form/Form.tsx";
import * as S from "./CartContainer.style.ts";
import BinIcon from "../../../../../public/icons/BinIcon.svg";
import { useEffect, useState } from "react";
import { QuantifierOfCard } from "./QuantifierOfCard.tsx";

export function CartContainer() {
  const [orderList, setOderList] = useState<any | null>([]);

  useEffect(() => {
    const orderListStored = JSON.parse(
      window.localStorage.getItem("coffeeList") || "[]"
    );
    setOderList(orderListStored);
  }, []);

  function removeItem(id: any) {
    const coffeeListArray = JSON.parse(
      window.localStorage.getItem("coffeeList") || "[]"
    );
    const index = coffeeListArray.findIndex((x: { id: any }) => x.id === id);

    coffeeListArray.splice(index, 1);
    window.localStorage.setItem("coffeeList", JSON.stringify(coffeeListArray))
    setOderList(coffeeListArray);
  }

  return (
    <S.Container>
      <Form />
      <S.SelectedCoffeeContainer>
        <S.ContainerTitleConfirmOrder>
          Cafés selecionados
        </S.ContainerTitleConfirmOrder>
        <S.SelectedCoffeeCard>
          <S.CoffeeItemsContainer>
            {orderList.map((element) => (
              <S.CoffeeItemContainer key={element?.id}>
                <S.CoffeeItem>
                  <CImage src={`${element?.coffeeObject?.url}`} />
                  <S.CoffeeItemInfo>
                    <S.CoffeeName>{element?.coffeeObject?.title}</S.CoffeeName>
                    <S.CoffeeItemButtons>
                      <QuantifierOfCard coffee={element} />
                      <S.RemoveCoffeeItemButton
                        onClick={() => removeItem(element?.id)}
                      >
                        <CImage src={BinIcon} />
                        remover
                      </S.RemoveCoffeeItemButton>
                    </S.CoffeeItemButtons>
                  </S.CoffeeItemInfo>
                  <S.CoffeeItemPrice>
                    R$ {element?.coffeeObject?.price}
                  </S.CoffeeItemPrice>
                </S.CoffeeItem>
              </S.CoffeeItemContainer>
            ))}
          </S.CoffeeItemsContainer>
          <S.TextInformationContainer>
            <S.TotalItemInformation>
              Total de itens <S.Price>R$ 70,00</S.Price>
            </S.TotalItemInformation>
            <S.DeliveryPriceInformation>
              Entrega <S.Price>R$ 7,00</S.Price>
            </S.DeliveryPriceInformation>
            <S.InformationOnTheTotalToBePaid>
              Total <S.Price>R$ 77,00</S.Price>
            </S.InformationOnTheTotalToBePaid>
          </S.TextInformationContainer>
          <S.ConfirmOrderButton>confirmar pedido</S.ConfirmOrderButton>
        </S.SelectedCoffeeCard>
      </S.SelectedCoffeeContainer>
    </S.Container>
  );
}
