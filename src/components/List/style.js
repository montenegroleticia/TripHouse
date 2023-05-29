import styled from "styled-components";

export const ContainerList = styled.div`
  width: 390px;
  height: 200px;
  background: #fafafa;
  border: 1px solid rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  .headLine {
    margin-left: 21px;
    margin-bottom: 10px;
    h2 {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 14px;
      color: #487aa1;
      stroke: 1px solid rgba(0, 0, 0, 0.25);
    }
  }
  .images {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    p {
      width: 135px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      color: #487aa1;
      stroke: 1px solid rgba(0, 0, 0, 0.25);
    }
  }
  img {
    width: 174px;
    height: 120px;
    border-radius: 8px;
  }
  h5 {
    margin-top: 16px;
    text-align: center;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    color: #A9BA75;
    stroke: 1px solid rgba(0, 0, 0, 0.25);
  }
  &:hover {
    h2, p {
      color: #fafafa;
    }
    background-color: #487aa1;
  }
`;
