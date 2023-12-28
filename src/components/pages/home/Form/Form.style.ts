import styled from "styled-components";

export const FormContainer = styled.div`
  height: 100%;
  width: fit-content;
`;

export const TitleForm = styled.h2`
  width: fit-content;
  margin-bottom: 15px;

  color: var(--Base-Subtitle, #403937);

  font-family: "Baloo 2";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;

  max-width: 560px;
  width: 100%;
  height: auto;
`;

export const InputFieldsContainer = styled.div`
  height: auto;
  width: 100%;
  padding: 40px 40px 40px 40px;
  background-color: var(--base-card);
  border-radius: 6px;
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
`;
export const InfoTextContainer = styled.div`
  font-family: "Roboto";
`;
export const InfoTitle = styled.p`
  color: var(--base-subtitle);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;
export const InfoDescription = styled.p`
  color: var(--base-text);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

export const InputGroup1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: auto;
`;

export const InputGroup2 = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
  width: 100%;
`;

export const InputGroup3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: fit-content;

  input {
    width: 200px;
  }
`;

export const InputGroup4 = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 16px;

  & fieldset:nth-last-of-type(3) {
    input {
      width: 100%;
    }
  }

  & fieldset:nth-last-of-type(2) {
    width: fit-content;
    input {
      max-width: 276px;
    }
  }

  & fieldset:nth-last-of-type(1) {
    width: fit-content;
    input {
      max-width: 50px;
    }
  }
`;

export const BaseFieldSet = styled.fieldset`
  border: none;
  width: 100%;
`;

export const CEP = styled(BaseFieldSet)`
  input {
    width: 100%;
    max-width: 200px;
  }
`;
export const Street = styled(BaseFieldSet)`
  input {
    width: 100%;
  }
`;
export const Number = styled(BaseFieldSet)``;
export const Complement = styled(BaseFieldSet)``;
export const Neighborhood = styled(BaseFieldSet)``;
export const City = styled(BaseFieldSet)``;
export const FederativeUnit = styled(BaseFieldSet)``;

export const BaseLabel = styled.label``;

export const BaseInput = styled.input`
  width: 100%;
  height: 42px;
  background-color: var(--base-button);
  border: none;
  border-radius: 4px;
  padding: 0 12px;
`;

export const ContainerSelectPaymentMethod = styled.div`
  height: 207px;
  background-color: var(--base-card);
  border-radius: 6px;
  padding: 40px;
`;

export const PaymentButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

export const PaymentButton = styled.button`
  display: flex;
  align-items: center;
  height: 51px;
  width: 100%;
  border: none;
  background-color: var(--base-button);
  padding: 16px;

  color: var(--base-text);

  font-family: "Roboto";
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;

  img {
    margin-right: 12px;
  }
`;
