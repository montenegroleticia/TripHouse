import Header from "../../components/Header";
import List from "../../components/List/destinations";
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
        {destinations &&
          destinations.map((item, index) => <List key={index} body={item} />)}
      </ContainerLists>
    </ContainerMain>
  );
}

export default Destinations;
