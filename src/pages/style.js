import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerDatach = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;

export const ContainerLists = styled.div`
  margin-top: 31px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;

export const ContainerQuery = styled.div`
  margin-top: 121px;
  width: 175px;
  display: flex;
  justify-content: space-evenly;
  input {
    width: 100px;
    height: 30px;
    border: transparent;
    background-color: #fafafa;
    border-radius: 5px;
    color: #487aa1;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    &:focus {
      outline: none;
      border-color: #487aa1;
      box-shadow: 0 0 5px #487aa1;
    }
  }
  button {
    border: transparent;
    background-color: #fafafa;
    border-radius: 5px;
    color: #487aa1;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    &:hover {
      color: #fafafa;
      background-color: #487aa1;
    }
  }
  div {
    display: flex;
    input {
      margin-right: 8px;
    }
  }
`;

export const ContainerLodge = styled.div`
  margin-top: 121px;
  width: 390px;
  height: 400px;
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
      margin-bottom: 2px;
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
    margin-top: 21px;
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