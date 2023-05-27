import styled from "styled-components";

export const ContainerChoices = styled.div`
  margin-top: 121px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;

export const ContainerChoice = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(0, 0, 0, 0.25);
  background-color: #fafafa;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: #fafafa;
    background-color: #487aa1;
    h3 {
      color: #fafafa;
    }
  }
  h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #487aa1;
    stroke: Solid rgba(0, 0, 0, 0.25);
  }
`;
