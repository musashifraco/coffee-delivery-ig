import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  gap: 32px;
`;

export const FormContainer = styled.div``;

export const TitleForm = styled.h2``;

export const SelectedCoffeeContainer = styled.div``;
export const ContainerTitleConfirmOrder = styled.h2`
  width: fit-content;
  margin-bottom: 15px;

  color: var(--base-subtitle);

  font-family: "Baloo 2";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
`;

export const SelectedCoffeeCard = styled.div`
  display: flex;
  height: fit-content;
  width: fit-content;
  padding: 40px;
  flex-direction: column;

  border-radius: 6px 44px;
  background: var(--base-card);
`;

export const CoffeeItemsContainer = styled.div`
  > div:nth-of-type(1) {
    padding-bottom: 24px;
    border-bottom: 1px solid var(--base-button);
  }

  > div {
    padding: 24px 0;
    border-bottom: 1px solid var(--base-button);
  }
`;

export const CoffeeItemContainer = styled.div``;

export const CoffeeItem = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;

  > img {
    height: 64px;
    width: 64px;
  }
`;

export const CoffeeItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CoffeeName = styled.p`
  color: var(--Base-Subtitle, #403937);

  /* Text/Regular M */
  font-family: "Roboto";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const CoffeeItemButtons = styled.div`
  display: flex;
  gap: 8px;
`;

export const RemoveCoffeeItemButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  gap: 4px;
  color: var(--base-text);
  background: var(--base-button);
  font-family: "Roboto";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;
  border: none;
  border-radius: 8px;
`;

export const CoffeeItemPrice = styled.p`
  margin-left: 30px;
  color: var(--base-text);
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 700;
`;

export const TextInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 25px;
`;

export const TotalItemInformation = styled.p`
  display: flex;
  justify-content: space-between;
`;

export const DeliveryPriceInformation = styled.p`
  display: flex;
  justify-content: space-between;
`;

export const InformationOnTheTotalToBePaid = styled.p`
  display: flex;
  justify-content: space-between;

  color: var(--base-subtitle);

  font-family: "Roboto";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

export const Price = styled.span``;

export const ConfirmOrderButton = styled(NavLink)`
  text-transform: uppercase;
  display: flex;
  margin-top: 24px;
  height: 46px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 6px;
  border: none;
  background: var(--brand-yellow);

  color: var(--base-white);
  text-decoration: none;

  font-size: 14px;
  font-weight: 700;
`;
