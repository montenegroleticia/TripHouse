import Header from "../../components/Header";
import Detach from "../../components/Detach";
import { ContainerMain, ContainerDatach } from "../style";
import Choices from "../../components/Choices";
import destinationsApi from "../../services/destinationsApi";
import { useEffect, useState } from "react";
import lodgesApi from "../../services/lodgesApi";

function Homepage() {
  const [destinations, setDestinations] = useState(null);
  const [lodges, setLodges] = useState(null);

  function getDestinations() {
    destinationsApi
      .getDestinations()
      .then((res) => setDestinations(res.data))
      .catch((err) => console.log(err.response.data));
  }

  useEffect(getDestinations, []);

  function getLodges() {
    lodgesApi
      .getLodges()
      .then((res) => setLodges(res.data))
      .catch((err) => console.log(err.response.data));
  }

  useEffect(getLodges, []);

  return (
    <ContainerMain>
      <Header />
      <Choices />
      <ContainerDatach>
        <Detach body={destinations} />
        <Detach body={lodges} />
      </ContainerDatach>
    </ContainerMain>
  );
}

export default Homepage;
