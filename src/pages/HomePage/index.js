import Header from "../../components/Header";
import Detach from "../../components/Detach";
import { ContainerMain } from "./style";
import Choices from "../../components/Choices";

function Homepage() {
  return (
    <ContainerMain>
      <Header />
      <Choices />
      <Detach />
    </ContainerMain>
  );
}

export default Homepage;
