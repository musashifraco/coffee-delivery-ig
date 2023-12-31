import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 10px;

  > img {
    width: 492px;
    height: 293px;
  }
`;

export const ConfirmedOrderInformationContainer = styled.div``;

export const ConfirmedOrderTitle = styled.h2`
  color: var(--brand-yellow-dark);

  font-family: "Baloo 2";
  font-size: 32px;
  font-weight: 800;
`;
export const ConfirmedOrderDescription = styled.p`
  margin-bottom: 40px;
  color: var(--base-subtitle);

  font-family: "Roboto";
  font-size: 20px;
  font-weight: 400;
`;

export const OrderInformationContainer = styled.div`
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  border-radius: 6px 36px;
  border: 1px solid var(--brand-yellow);
`;

export const OrderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  img {
    top: 100px;
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`;

export const OrderInfoText = styled.div``;
export const OrderInfoTextTitle = styled.div``;
export const OrderInfoTextDescription = styled.div`
  color: var(--Base-Text, #574f4d);
  font-family: "Roboto";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;

export const RedirectToHomePageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;

  img {
    position: relative;
    top: 40px;
  }
`;

export const GoToHomePage = styled(NavLink)`
  text-transform: uppercase;
  display: flex;
  height: 46px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-top: 60px;

  border-radius: 6px;
  border: none;
  background: var(--brand-yellow);

  color: var(--base-white);
  text-decoration: none;

  font-size: 14px;
  font-weight: 700;
`;
