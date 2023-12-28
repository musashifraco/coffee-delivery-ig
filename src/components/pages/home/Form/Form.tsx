// import { useFormContext } from 'react-hook-form'
import * as S from "./Form.style.ts";
import { CImage } from "@coreui/react";
import CartIcon from "../../../../../public/icons/LocationInfo.svg";
import MoneyIcon from "../../../../../public/icons/IconMoney.svg";
import CardIcon from "../../../../../public/icons/CardIcon.svg";
import DebtIcon from "../../../../../public/icons/DebtIcon.svg";
import DolarIcon from "../../../../../public/icons/Dolar.svg";

export function Form() {
  // const { register } = useFormContext();

  return (
    <S.FormContainer>
      <S.TitleForm>Complete seu pedido</S.TitleForm>
      <S.Form>
        <S.InputFieldsContainer>
          <S.InfoContainer>
            <CImage src={CartIcon} />
            <S.InfoTextContainer>
              <S.InfoTitle>Endereço de Entrega</S.InfoTitle>
              <S.InfoDescription>
                Informe o endereço onde deseja receber seu pedido
              </S.InfoDescription>
            </S.InfoTextContainer>
          </S.InfoContainer>
          <S.InputGroup1>
            <S.CEP>
              <S.BaseLabel></S.BaseLabel>
              <S.BaseInput placeholder="CEP"></S.BaseInput>
            </S.CEP>
            <S.Street>
              <S.BaseLabel></S.BaseLabel>
              <S.BaseInput placeholder="Rua"></S.BaseInput>
            </S.Street>
          </S.InputGroup1>

          <S.InputGroup2>
            <S.InputGroup3>
              <S.Number>
                <S.BaseLabel></S.BaseLabel>
                <S.BaseInput placeholder="Número"></S.BaseInput>
              </S.Number>
              <S.Neighborhood>
                <S.BaseLabel></S.BaseLabel>
                <S.BaseInput placeholder="Bairro"></S.BaseInput>
              </S.Neighborhood>
            </S.InputGroup3>

            <S.InputGroup4>
              <S.Complement>
                <S.BaseLabel></S.BaseLabel>
                <S.BaseInput placeholder="Complemento"></S.BaseInput>
              </S.Complement>
              <S.City>
                <S.BaseLabel></S.BaseLabel>
                <S.BaseInput placeholder="Cidade"></S.BaseInput>
              </S.City>
              <S.FederativeUnit>
                <S.BaseLabel></S.BaseLabel>
                <S.BaseInput placeholder="UF"></S.BaseInput>
              </S.FederativeUnit>
            </S.InputGroup4>
          </S.InputGroup2>
        </S.InputFieldsContainer>
        <S.ContainerSelectPaymentMethod>
        <S.InfoContainer>
            <CImage src={DolarIcon} />
            <S.InfoTextContainer>
              <S.InfoTitle>Pagamento</S.InfoTitle>
              <S.InfoDescription>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </S.InfoDescription>
            </S.InfoTextContainer>
          </S.InfoContainer>
          <S.PaymentButtonContainer>
            <S.PaymentButton>
              <CImage src={CardIcon} /> CARTÃO DE CRÉDITO
            </S.PaymentButton>
            <S.PaymentButton>
              <CImage src={DebtIcon} /> CARTÃO DE DÉBITO
            </S.PaymentButton>
            <S.PaymentButton>
              <CImage src={MoneyIcon} /> DINHEIRO
            </S.PaymentButton>
          </S.PaymentButtonContainer>
        </S.ContainerSelectPaymentMethod>
      </S.Form>
    </S.FormContainer>
  );
}
