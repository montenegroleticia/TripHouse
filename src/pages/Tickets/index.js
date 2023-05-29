import Header from "../../components/Header";
import List from "../../components/List/tickets";
import ticketsApi from "../../services/ticketsApi";
import destinationsApi from "../../services/destinationsApi";
import { ContainerLists, ContainerMain, ContainerQuery } from "../style";
import { useEffect, useState } from "react";

function Tickets() {
  const [tickets, setTickets] = useState(null);
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

  function getTickets() {
    ticketsApi
      .getTickets()
      .then((res) => setTickets(res.data))
      .catch((err) => console.log(err.response.data));
  }

  useEffect(getTickets, []);

  function query() {
    const destination = destinations.find(
      (item) => item.city === destinationValue
    );
    const destinationId = destination ? destination.id : null;
    ticketsApi
      .getTicketsQuery(destinationId, priceValue)
      .then((res) => setTickets(res.data))
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
        {tickets &&
          tickets.map((item, index) => <List key={index} body={item} />)}
      </ContainerLists>
    </ContainerMain>
  );
}

export default Tickets;
