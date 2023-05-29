import { ContainerList } from "./style";
import { useNavigate } from "react-router-dom";

function List({ body }) {
  const navigate = useNavigate();

  function Page(page) {
    navigate(page);
  }
  return (
    <ContainerList onClick={() => Page(`/lodge/${body.id}`)}>
      <div className="headLine">
        <h2>{body.name}</h2>
      </div>
      <div className="images">
        <img src={body.image} alt={body.name} />
        <div>
          <p>{body.description}</p>
          <h5>R${body.price}</h5>
        </div>
      </div>
    </ContainerList>
  );
}

export default List;
