import styled from "styled-components";

export const QuantifierContainer = styled.div`
  display: flex;
  height: 38px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 6px;
  background: var(--base-button);

  button {
    height: 14px;
    width: 14px;
    border: none;
    background: var(--base-button);
  }

  span {
    display: flex;
    width: 20px;
    flex-direction: column;

    color: var(--base-title);
    text-align: center;

    /* Text/Regular M */
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`;
