import styled from "styled-components";

export const LocationContainer = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 6px;
  background: var(--brand-purple-light);

  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;

    color: var(--brand-purple-dark);
  }

  img {
    height: 22px;
    width: 22px;
  }
`;
