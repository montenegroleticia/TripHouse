import Header from "../../components/Header";
import List from "../../components/List";
import { ContainerLists, ContainerMain } from "../style";
import destinationsApi from "../../services/destinationsApi";
import { useEffect, useState } from "react";

function Destinations() {
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
      <ContainerLists>
        <List body={destinations} />
        <List body={destinations} />
        <List body={destinations} />
        <List body={destinations} />
        <List body={destinations} />
        <List body={destinations} />
        <List body={destinations} />
        <List body={destinations} />
      </ContainerLists>
    </ContainerMain>
  );
}

export default Destinations;
