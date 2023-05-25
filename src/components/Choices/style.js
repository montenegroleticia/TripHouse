import styled from "styled-components";

export const ContainerChoices = styled.div`
  margin-top: 121px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  div {
    display: flex;
    gap: 50px;
  }
  h2 {
    margin-bottom: 12px;
    text-align: center;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
    stroke: 1px solid rgba(0, 0, 0, 0.25);
  }
`;

export const ContainerT = styled.div`
  width: 0;
  height: 0;
  border-left: 130px solid transparent;
  border-right: 130px solid transparent;
  border-top: 150px solid #b2d9f7;
  position: absolute;
  z-index: -1;
`;

export const ContainerChoice = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  background-color: #487aa1;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
    stroke: Solid rgba(0, 0, 0, 0.25);
  }
`;
