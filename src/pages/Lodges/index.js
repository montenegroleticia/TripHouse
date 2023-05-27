import Header from "../../components/Header";
import List from "../../components/List/lodges";
import { ContainerLists, ContainerMain } from "../style";
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
      <ContainerLists>
      {lodges &&
          lodges.map((item, index) => <List key={index} body={item} />)}
      </ContainerLists>
    </ContainerMain>
  );
}

export default Lodges;
