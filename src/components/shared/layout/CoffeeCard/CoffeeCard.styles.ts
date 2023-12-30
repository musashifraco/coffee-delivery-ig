import styled from "styled-components";

export const CoffeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 256px;
  height: 310px;
  flex-shrink: 0;
  border-radius: 6px 36px;
  background-color: var(--base-card);

  > img {
    position: absolute;
    top: -20px;
    transform: translateX(0%);
    height: 120px;
    width: 120px;
  }

  > p {
    display: flex;
    padding: 4px 8px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;

    /* Components/Tag */
    font-family: "Roboto";
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;

    background: var(--brand-yellow-light);
    color: var(--brand-yellow-dark);

    margin: 112px 0px 16px 0px;
  }

  > div {
    margin-bottom: 33px;
  }

  .card-text-container > h3 {
    margin-bottom: 8px;
    color: var(--base-subtitle);
    text-align: center;

    /* Title/Title S */
    font-size: 20px;
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }

  .card-text-container > p {
    display: flex;
    width: 216px;
    flex-direction: column;
    flex-shrink: 0;
    color: var(--base-label);
    text-align: center;

    /* Text/Regular S */
    font-size: 14px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  .card-text-container > h3,
  p {
    text-align: center;
  }

  .purchase-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-items: center;
    gap: 23px;
  }

  .purchase-container > p {
    color: var(--base-text);
    text-align: right;
    font-family: "Roboto";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;

    strong {
      font-family: "Baloo 2";
      font-weight: 800;
      font-size: 25px;
    }
  }

  .increment-and-decrement {
    display: flex;
    align-items: center;
    gap: 8px;

    > .ShoppingCartSimple-Container {
      display: flex;
      padding: 8px;
      justify-content: center;
      align-items: center;
      gap: 8px;

      border-radius: 6px;
      border: none;
      background: var(--brand-purple-dark, #4b2995);

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
