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
      font-size: 12px;
      line-height: 14px;
      color: #487aa1;
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
    border-radius: 8px;
  }
`;
