import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 100vw;
  height: 90px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  background-color: #003580;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #ffffff;
    stroke: Solid rgba(0, 0, 0, 0.25);
  }
`;
