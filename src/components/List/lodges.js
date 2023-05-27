import { ContainerList } from "./style";

function List({ body }) {
  return (
    <ContainerList>
      <div className="headLine">
        <h2>{body.name}</h2>
      </div>
      <div className="images">
        <img src={body.image} alt={body.name} />
        <p>{body.address}</p>
      </div>
    </ContainerList>
  );
}

export default List;
