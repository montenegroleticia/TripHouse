import { Container } from "./style";

function Detach({ body }) {
  return (
    <Container>
      <div className="headLine">
        <h2>MAIS PROCURADOS</h2>
      </div>
      <div className="images">
        {body && body.length > 0 ? (
          <img src={body[0].image} alt={body[0].name} />
        ) : null}
        <div className="imageRow">
          {body && body.length > 1 ? (
            <img src={body[1].image} alt={body[1].name} />
          ) : null}
          {body && body.length > 2 ? (
            <img src={body[2].image} alt={body[2].name} />
          ) : null}
        </div>
      </div>
    </Container>
  );
}

export default Detach;
