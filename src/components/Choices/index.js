import { ContainerChoices, ContainerChoice, ContainerT } from "./style";
import { Link } from "react-router-dom";

function Choices() {
  return (
    <ContainerChoices>
      <ContainerT />
      <div>
        <Link to="/destinations">
          <ContainerChoice>
            <h3>DESTINOS</h3>
          </ContainerChoice>
        </Link>
        <Link to="/tickets">
          <ContainerChoice>
            <h3>PASSAGENS</h3>
          </ContainerChoice>
        </Link>
      </div>
      <h2>COMECE POR AQUI</h2>
      <Link to="/lodge">
        <ContainerChoice>
          <h3>HOSPEDAGENS</h3>
        </ContainerChoice>
      </Link>
    </ContainerChoices>
  );
}

export default Choices;
