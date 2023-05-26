import { ContainerChoices, ContainerChoice } from "./style";
import { Link } from "react-router-dom";

function Choices() {
  return (
    <ContainerChoices>
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
      <Link to="/lodges">
        <ContainerChoice>
          <h3>HOSPEDAGENS</h3>
        </ContainerChoice>
      </Link>
    </ContainerChoices>
  );
}

export default Choices;
