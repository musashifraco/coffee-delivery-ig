import { CImage } from "@coreui/react";
import * as S from "./ConfirmedOrderSection.styles";
import Deliveryman from "../../../,,/../../../public/images/Deliveryman.svg";
import MoneyCircle from "../../../,,/../../../public/icons/MoneyCircle.png";
import LocalCircle from "../../../,,/../../../public/icons/LocalCircle.png";
import TimeCircle from "../../../,,/../../../public/icons/Clock Icon.svg";

export function ConfirmedOrderSection() {
  return (
    <S.Container>
      <S.ConfirmedOrderInformationContainer>
        <S.ConfirmedOrderTitle>Uhu! Pedido confirmado</S.ConfirmedOrderTitle>
        <S.ConfirmedOrderDescription>
          Agora é só aguardar que logo o café chegará até você
        </S.ConfirmedOrderDescription>
        <S.OrderInformationContainer>
          <S.OrderInfo>
            <CImage src={LocalCircle} />
            <S.OrderInfoText>
              <S.OrderInfoTextDescription>Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre, RS</S.OrderInfoTextDescription>
            </S.OrderInfoText>
          </S.OrderInfo>
          <S.OrderInfo>
            <CImage src={TimeCircle}/>
            <S.OrderInfoText>
              <S.OrderInfoTextTitle>Previsão de entrega</S.OrderInfoTextTitle>
              <S.OrderInfoTextDescription>20 min - 30 min </S.OrderInfoTextDescription>
            </S.OrderInfoText>
          </S.OrderInfo>
          <S.OrderInfo>
            <CImage src={MoneyCircle}/>
            <S.OrderInfoText>
              <S.OrderInfoTextTitle>Pagamento na entrega</S.OrderInfoTextTitle>
              <S.OrderInfoTextDescription>Cartão de Crédito</S.OrderInfoTextDescription>
            </S.OrderInfoText>
          </S.OrderInfo>
        </S.OrderInformationContainer>
      </S.ConfirmedOrderInformationContainer>
      <CImage src={Deliveryman}/>
    </S.Container>
  );
}
