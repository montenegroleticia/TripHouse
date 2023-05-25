import { ContainerHeader } from "./style";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to="/">
      <ContainerHeader>
        <h3>TripHouse</h3>
      </ContainerHeader>
    </Link>
  );
}

export default Header;
