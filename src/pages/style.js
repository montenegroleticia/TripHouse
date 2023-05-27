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
`;
