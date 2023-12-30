import { CImage } from "@coreui/react";
import { Form } from "../Form/Form.tsx";
import * as S from "./CartContainer.style.ts";
import MockedCoffeeImage from "../../../../../public/coffee-images-pure/Image.png";
import BinIcon from "../../../../../public/icons/BinIcon.svg";
import { Quantifier } from "../../../shared/layout/Quantifier/Quantifier.tsx";

export function CartContainer() {
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
              <S.CoffeeItem>
                <CImage src={MockedCoffeeImage} />
                <S.CoffeeItemInfo>
                  <S.CoffeeName>Expresso Tradicional</S.CoffeeName>
                  <S.CoffeeItemButtons>
                    <Quantifier />
                    <S.RemoveCoffeeItemButton>
                      <CImage src={BinIcon} />
                      remover
                    </S.RemoveCoffeeItemButton>
                  </S.CoffeeItemButtons>
                </S.CoffeeItemInfo>
                <S.CoffeeItemPrice>R$ 9,90</S.CoffeeItemPrice>
              </S.CoffeeItem>
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
          <S.ConfirmOrderButton>
            confirmar pedido
          </S.ConfirmOrderButton>
        </S.SelectedCoffeeCard>
      </S.SelectedCoffeeContainer>
    </S.Container>
  );
}
