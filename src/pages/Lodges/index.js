import Header from "../../components/Header";
import List from "../../components/List/lodges";
import { ContainerLists, ContainerMain, ContainerQuery } from "../style";
import { useEffect, useState } from "react";
import lodgesApi from "../../services/lodgesApi";

function Lodges() {
  const [lodges, setLodges] = useState(null);

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
      <ContainerQuery>
        <input list="destination" />
        <datalist id="destination">
          {" "}
          <option value="São Paulo" />
          <option value="Rio de Janeiro" />
        </datalist>
        <button>Filtrar</button>
      </ContainerQuery>
      <ContainerLists>
      {lodges &&
          lodges.map((item, index) => <List key={index} body={item} />)}
      </ContainerLists>
    </ContainerMain>
  );
}

export default Lodges;
