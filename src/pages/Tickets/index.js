import Header from "../../components/Header";
import List from "../../components/List/tickets";
import ticketsApi from "../../services/ticketsApi";
import { ContainerLists, ContainerMain, ContainerQuery } from "../style";
import { useEffect, useState } from "react";

function Tickets() {
  const [tickets, setTickets] = useState(null);

  function getTickets() {
    ticketsApi
      .getTickets()
      .then((res) => setTickets(res.data))
      .catch((err) => console.log(err.response.data));
  }

  useEffect(getTickets, []);
  return (
    <ContainerMain>
      <Header />
      <ContainerQuery>
        <input list="price" />
        <datalist id="price">
          {" "}
          <option value="menor-maior" />
          <option value="maior-menor" />
        </datalist>
        <button>Filtrar</button>
      </ContainerQuery>
      <ContainerLists>
        {tickets &&
          tickets.map((item, index) => <List key={index} body={item} />)}
      </ContainerLists>
    </ContainerMain>
  );
}

export default Tickets;
