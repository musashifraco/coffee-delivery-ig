import styled from "styled-components";

export const IntroSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 544px;
  /* padding: 94px 160px 0px 160px; */

  .background {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .coffee {
    position: absolute;
    right: 160px;
    top: 94px;
    width: 476px;
    height: 360px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 588px;
  margin: 94px 160px 66px 160px;
  gap: 16px;

  h1 {
    word-wrap: break-word;
    color: var(--base-title);

    /* Title/Title XL */
    font-size: 48px;
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }

  p {
    color: var(--base-subtitle);

    /* Text/Regular L */
    font-size: 20px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`;

export const BenefitsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 567px;
  height: 84px;
  gap: 40px;
  margin: 0px 160px 0px 160px;
  flex-shrink: 0;

  div:nth-of-type(1) {
    display: flex;
    width: 231px;
    align-items: center;
    gap: 12px;
  }

  div:nth-of-type(2) {
    display: flex;
    width: 294px;
    align-items: center;
    gap: 12px;
  }

  div:nth-of-type(3) {
    display: flex;
    width: 231px;
    align-items: center;
    gap: 12px;
  }

  div:nth-of-type(4) {
    display: flex;
    width: 294px;
    align-items: center;
    gap: 12px;
  }

  div img {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    width: 32px;
  }

  p {
    color: var(--base-text);

    /* Text/Regular M */
    font-size: 16px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`;
