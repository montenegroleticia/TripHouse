import Header from "../../components/Header";
import Detach from "../../components/Detach";
import { ContainerMain, ContainerDatach } from "../style";
import Choices from "../../components/Choices";
import destinationsApi from "../../services/destinationsApi";
import { useEffect, useState } from "react";
import lodgesApi from "../../services/lodgesApi";
import { Link } from "react-router-dom";
import { lodgesContext } from "../../hook/context";
import { useContext } from "react";

function Homepage() {
  const [destinations, setDestinations] = useState(null);
  const { lodges, setLodges } = useContext(lodgesContext);

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

  // eslint-disable-next-line
  useEffect(getLodges, []);

  return (
    <ContainerMain>
      <Header />
      <Choices />
      <ContainerDatach>
        <Link to="/destinations">
          <Detach body={destinations} />
        </Link>
        <Link to="/lodges">
          <Detach body={lodges} />
        </Link>
      </ContainerDatach>
    </ContainerMain>
  );
}

export default Homepage;
