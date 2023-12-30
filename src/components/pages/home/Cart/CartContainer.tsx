import { CImage } from "@coreui/react";
import { Form } from "../Form/Form.tsx";
import * as S from "./CartContainer.style.ts";
import BinIcon from "../../../../../public/icons/BinIcon.svg";
import { Quantifier } from "../../../shared/layout/Quantifier/Quantifier.tsx";
import { useEffect, useState } from "react";

export function CartContainer() {
  const [orderList, setOderList] = useState<any | null>([]);

  useEffect(() => {
    const orderListStored = JSON.parse(
      window.localStorage.getItem("coffeeList") || "[]"
    );
    setOderList(orderListStored);
  }, []);

  console.log(orderList);

  return (
    <S.Container>
      <Form />
      <S.SelectedCoffeeContainer> 
        <S.ContainerTitleConfirmOrder>
          Cafés selecionados
        </S.ContainerTitleConfirmOrder>
        <S.SelectedCoffeeCard>
          <S.CoffeeItemsContainer>
            <S.CoffeeItemContainer>
              {orderList.map((element) => (
                <S.CoffeeItem>
                  <CImage src={`${element?.coffeeObject?.url}`} />
                  <S.CoffeeItemInfo>
                    <S.CoffeeName>{element?.coffeeObject?.title}</S.CoffeeName>
                    <S.CoffeeItemButtons>
                      <Quantifier />
                      <S.RemoveCoffeeItemButton>
                        <CImage src={BinIcon} />
                        remover
                      </S.RemoveCoffeeItemButton>
                    </S.CoffeeItemButtons>
                  </S.CoffeeItemInfo>
                  <S.CoffeeItemPrice>R$ {element?.coffeeObject?.price}</S.CoffeeItemPrice>
                </S.CoffeeItem>
              ))}
            </S.CoffeeItemContainer>
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
