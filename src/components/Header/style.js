import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 100vw;
  height: 90px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  background-color: #fafafa;
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
    font-size: 24px;
    line-height: 38px;
    color: transparent;
    -webkit-text-stroke: 1px #487aa1;
    background-color: transparent;
    &:hover {
      color: #487aa1;
    }
  }
`;
