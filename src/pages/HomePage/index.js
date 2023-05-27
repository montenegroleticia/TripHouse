import Header from "../../components/Header";
import Detach from "../../components/Detach";
import { ContainerMain, ContainerDatach } from "../style";
import Choices from "../../components/Choices";
import destinationsApi from "../../services/destinationsApi";
import { useEffect, useState } from "react";

function Homepage() {
  const [destinations, setDestinations] = useState(null);

  function getDestinations() {
    destinationsApi
      .getDestinations()
      .then((res) => setDestinations(res.data))
      .catch((err) => console.log(err.response.data));
  }

  useEffect(getDestinations, []);

  return (
    <ContainerMain>
      <Header />
      <Choices />
      <ContainerDatach>
        <Detach body={destinations} />
        <Detach />
        <Detach />
      </ContainerDatach>
    </ContainerMain>
  );
}

export default Homepage;
