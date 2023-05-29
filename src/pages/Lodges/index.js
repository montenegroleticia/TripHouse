import Header from "../../components/Header";
import List from "../../components/List/lodges";
import { ContainerLists, ContainerMain, ContainerQuery } from "../style";
import { useEffect, useState } from "react";
import lodgesApi from "../../services/lodgesApi";
import destinationsApi from "../../services/destinationsApi";

function Lodges() {
  const [lodges, setLodges] = useState(null);
  const [destinations, setDestinations] = useState(null);
  const [destinationValue, setDestinationValue] = useState("");
  const [priceValue, setPriceValue] = useState("");

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

  function query() {
    const destination = destinations.find(
      (item) => item.city === destinationValue
    );
    const destinationId = destination ? destination.id : null;
    lodgesApi
      .getLodgesQuery(destinationId, priceValue)
      .then((res) => setLodges(res.data))
      .catch((err) => console.log(err.response.data));
  }

  return (
    <ContainerMain>
      <Header />
      <ContainerQuery>
        <div>
          <input
            list="destination"
            value={destinationValue}
            onChange={(e) => setDestinationValue(e.target.value)}
          />
          <datalist id="destination">
            {" "}
            {destinations &&
              destinations.map((item, index) => (
                <option key={index} value={item.city} />
              ))}
          </datalist>
          <input
            list="price"
            value={priceValue}
            onChange={(e) => setPriceValue(e.target.value)}
          />
          <datalist id="price">
            {" "}
            <option value="menor-maior" />
            <option value="maior-menor" />
          </datalist>
          <button onClick={query}>Filtrar</button>
        </div>
      </ContainerQuery>
      <ContainerLists>
        {lodges &&
          lodges.map((item, index) => <List key={index} body={item} />)}
      </ContainerLists>
    </ContainerMain>
  );
}

export default Lodges;
