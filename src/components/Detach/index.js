import { Container } from "./style";

function Detach({ body }) {
  return (
    <Container>
      <div className="headLine">
        <h2>DESTINOS MAIS PROCURADOS</h2>
      </div>
      <div className="images">
        <img src={body?.image[0]} alt={body?.name[0]} />
        <div className="imageRow">
          <img src={body?.image[1]} alt={body?.name[1]} />
          <img src={body?.image[2]} alt={body?.name[2]} />
        </div>
      </div>
    </Container>
  );
}

export default Detach;
