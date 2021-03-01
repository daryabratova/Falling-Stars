import styled from "@emotion/styled";
import star from "../../assets/images/star.png";

export const Star = styled.div`
  display: grid;
  place-items: center;
  position: absolute;
  top: -150px;
  width: 150px;
  height: 150px;
  background-image: url(${star});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transform: translateX(-50%);
  font-size: 45px;
  font-weight: 700;
  color: #000;
`;
