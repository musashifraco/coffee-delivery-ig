import styled from "styled-components";

export const CoffeeListContainer = styled.section`
  display: flex;
  width: auto;
  height: auto;
  padding: 32px 160px 157px 160px;
  flex-direction: column;
  align-items: flex-start;
  gap: 54px;
  flex-shrink: 0;
  background-color: var(base-background);

  h2 {
    color: var(--base-subtitle);

    /* Title/Title L */
    font-size: 32px;
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

  > div {
    width: 256px;
    height: 310px;
    margin-bottom: 40px;
    margin-right: 32px;
  }

  div:last-child {
    margin-right: 0;
  }
`;
