import { ContainerList } from "./style";

function List({ body }) {
  return (
    <ContainerList>
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
