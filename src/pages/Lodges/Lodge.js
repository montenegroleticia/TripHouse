import Header from "../../components/Header";
import { ContainerLodge, ContainerMain } from "../style";
import { useEffect } from "react";
import lodgesApi from "../../services/lodgesApi";
import { lodgesContext } from "../../hook/context";
import { useContext } from "react";
import { useParams } from "react-router-dom";

function Lodge() {
  const { lodges, setLodges } = useContext(lodgesContext);
  const { id } = useParams();

  function getLodgesbyid() {
    lodgesApi
      .getLodgesbyid(id)
      .then((res) => setLodges(res.data))
      .catch((err) => console.log(err.response.data));
  }

  // eslint-disable-next-line
  useEffect(getLodgesbyid, []);

  if (!lodges || lodges.length === 0) {
    return null;
  }

  return (
    <ContainerMain>
      <Header />
      <ContainerLodge>
        <div className="headLine">
          <h2>{lodges[0].name}</h2>
        </div>
        <div className="images">
          <img src={lodges[0].image} alt={lodges[0].name} />
          <img src={lodges[0].room_image} alt={lodges[0].name} />
        </div>
        <div className="text">
          <p>{lodges[0].description}</p>
          <p>{lodges[0].amenities}</p>
          <p>{lodges[0].site}</p>
          <p>{lodges[0].address}</p>
          <h5>R${lodges[0].price}</h5>
        </div>
      </ContainerLodge>
    </ContainerMain>
  );
}

export default Lodge;
