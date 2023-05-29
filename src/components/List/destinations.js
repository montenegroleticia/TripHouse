import { ContainerList } from "./style";
import lodgesApi from "../../services/lodgesApi";
import { lodgesContext } from "../../hook/context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function List({ body }) {
  const { setLodges } = useContext(lodgesContext);
  const navigate = useNavigate();

  function lodgesbydestination(id) {
    lodgesApi
      .getLodgesbydestination(id)
      .then((res) => {
        setLodges(res.data);
        navigate("/lodges");
      })
      .catch((err) => console.log(err.response.data));
  }

  return (
    <ContainerList onClick={() => lodgesbydestination(body.id)}>
      <div className="headLine">
        <h2>{body.city}</h2>
      </div>
      <div className="images">
        <img src={body.image} alt={body.city} />
        <p>{body.description}</p>
      </div>
    </ContainerList>
  );
}

export default List;
