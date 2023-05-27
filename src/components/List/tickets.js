import { ContainerList } from "./style";
import destinationsApi from "../../services/destinationsApi";
import { useEffect, useState } from "react";

function List({ body }) {
  const [destinations, setDestinations] = useState(null);

  function formatDate(date) {
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };

    return new Date(date).toLocaleString("pt-BR", options);
  }

  function getDestinations() {
    destinationsApi
      .getDestinations()
      .then((res) => setDestinations(res.data))
      .catch((err) => console.log(err.response.data));
  }

  useEffect(() => getDestinations(), []);

  function getCity(id) {
    if (destinations === null) return "";

    const destination = destinations.find((dest) => dest.id === id);
    return destination ? destination.city : "";
  }

  useEffect(() => {
    getDestinations();
  }, []);

  return (
    <ContainerList>
      <div className="headLine">
        <h2>{body.airline}</h2>
      </div>
      <div className="images">
        <img src={body.image} alt={body.name} />
        <div>
          <p>Origem: {body.origin}</p>
          <p>Partida: {formatDate(body.departure)}</p>
          <p>Destino: {getCity(body.destination)}</p>
          <p>Chegada: {formatDate(body.landing)}</p>
          <h5>{body.price}</h5>
        </div>
      </div>
    </ContainerList>
  );
}

export default List;
