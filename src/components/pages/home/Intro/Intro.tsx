import {
  BenefitsContainer,
  IntroSection,
  TextContainer,
  // Title,
} from "./Intro.styles";
import BackgroundImage from "../../../../../public/images/Background.png";
import Coffee from "../../../../../public/images/Coffee.svg";
import CartIcon from "../../../../../public/icons/Car Icon.svg";
import BoxIcon from "../../../../../public/icons/Box Icon.svg";
import ClockIcon from "../../../../../public/icons/Clock Icon.svg";
import CoffeeIcon from "../../../../../public/icons/Coffee Icon.svg";

export function Intro() {
  return (
    <IntroSection>
      <TextContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
      </TextContainer>
      <BenefitsContainer>
        <div>
          <img src={CartIcon} alt="" />
          <p>Compra simples e segura</p>
        </div>
        <div>
          <img src={BoxIcon} alt="" />
          <p>Embalagem mantém o café intacto</p>
        </div>
        <div>
          <img src={ClockIcon} alt="" />
          <p>Entrega rápida e rastreada</p>
        </div>
        <div>
          <img src={CoffeeIcon} alt="" />
          <p>O café chega fresquinho até você</p>
        </div>
      </BenefitsContainer>
      <img className="background" src={BackgroundImage} alt="" />

      <img className="coffee" src={Coffee} alt="" />
    </IntroSection>
  );
}
