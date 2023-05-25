import { ContainerChoices, ContainerChoice, ContainerT } from "./style";

function Choices() {
  return (
    <ContainerChoices>
      <ContainerT />
      <div>
        <ContainerChoice>
          <h3>DESTINOS</h3>
        </ContainerChoice>
        <ContainerChoice>
          <h3>PASSAGENS</h3>
        </ContainerChoice>
      </div>
      <h2>COMECE POR AQUI</h2>
      <ContainerChoice>
        <h3>HOSPEDAGENS</h3>
      </ContainerChoice>
    </ContainerChoices>
  );
}

export default Choices;
