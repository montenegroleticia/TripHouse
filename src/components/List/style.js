import styled from "styled-components";

export const ContainerList = styled.div`
  margin-top: 121px;
  width: 390px;
  background: #487aa1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .headLine {
    margin-top: 21px;
    margin-left: 21px;
    margin-bottom: 10px;
    h2 {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      color: #ffffff;
      stroke: 1px solid rgba(0, 0, 0, 0.25);
    }
  }
  .images {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  img {
    width: 348px;
    height: 120px;
  }
`;
