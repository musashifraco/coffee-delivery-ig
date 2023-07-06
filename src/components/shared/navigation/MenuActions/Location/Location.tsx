import { LocationContainer } from "./Location.styles";
import LocationIcon from "../../../../../../public/icons/Location.svg";

export function Location() {
  return (
    <LocationContainer>
      <img src={LocationIcon} alt="" />
      <p>Port Alegre, RS</p>
    </LocationContainer>
  );
}
