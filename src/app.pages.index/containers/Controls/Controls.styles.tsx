import styled from "@emotion/styled";

export const Layout = styled.div`
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
`;

export const Button = styled.button`
  all: unset;
  margin: 15px;
  cursor: pointer;

  :hover {
    color: #c7c5c5;
  }
`;
