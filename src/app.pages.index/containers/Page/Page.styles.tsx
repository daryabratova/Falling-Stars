import styled from "@emotion/styled";
import playground from "../../assets/images/playground.png";

export const Main = styled.main`
  display: grid;
  place-items: center;
  height: 100vh;
  background: linear-gradient(to right, #318ba1,  #010910);
  font-family: Roboto;
  font-size: 30px;
  font-weight: 500;
  color: #fff;
`;

export const Playground = styled.div`
  width: calc(1.319587629 * 100vh);
  height: 100vh;
  background-image: url(${playground});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

