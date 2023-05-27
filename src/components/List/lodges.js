import { ContainerList } from "./style";

function List({ body }) {
  return (
    <ContainerList>
      <div className="headLine">
        <h2>{body.name}</h2>
      </div>
      <div className="images">
        <img src={body.image} alt={body.name} />
        <div>
          <p>{body.address}</p>
          <h5>{body.price}</h5>
        </div>
      </div>
    </ContainerList>
  );
}

export default List;
